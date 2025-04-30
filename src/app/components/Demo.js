"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ReferenceLine } from "recharts";


export default function Demo() {
  const [kp, setKp] = useState(1);
  const [ki, setKi] = useState(0);
  const [kd, setKd] = useState(0);
  const [leakRate, setLeakRate] = useState(0.1);
  const [data, setData] = useState([]);
  const target = 10;

  useEffect(() => {
    let value = 0;
    let error = target - value;
    let integral = 0;
    let lastError = error;
    const newData = [];
  
    for (let t = 0; t <= 50; t++) {
      error = target - value;
      integral += error;
      const derivative = error - lastError;
      let output = 0;
  
      output += kp * error;
      output += ki * integral;
      output += kd * derivative;
  
      value += output * 0.05;     
      value -= leakRate;           
      value = Math.max(0, value); 
      lastError = error;
  
      newData.push({ time: t, value });
    }
  
    setData(newData);
  }, [kp, ki, kd, leakRate]);
  

  return (
    <Card className="p-6 mt-10 shadow-2xl rounded-2xl w-300">
      <CardContent className="flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-center">Interactive PID Controller Demo</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              label={{ value: "Time", position: "insideBottomRight", offset: -5 }}
            />
            <YAxis
              label={{ value: "Value", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <ReferenceLine y={target} stroke="#10b981" strokeDasharray="3 3" label="Target" />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-2">
            <Label>Proportional Gain (Kp)</Label>
            <Slider
              min={0}
              max={5}
              step={0.1}
              value={[kp]}
              onValueChange={(v) => setKp(v[0])}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Integral Gain (Ki)</Label>
            <Slider
              min={0}
              max={2}
              step={0.05}
              value={[ki]}
              onValueChange={(v) => setKi(v[0])}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Derivative Gain (Kd)</Label>
            <Slider
              min={0}
              max={5}
              step={0.1}
              value={[kd]}
              onValueChange={(v) => setKd(v[0])}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Dissipation</Label>
            <Slider
              min={0}
              max={3}
              step={.005}
              value={[leakRate]}
              onValueChange={(v) => setLeakRate(v[0])}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
