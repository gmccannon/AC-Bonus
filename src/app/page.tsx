import Image from "next/image";
import Demo from "./components/Demo";

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black text-justify font-mono pl-64 pr-64 pt-25 pb-25 items-center justify-items-center min-h-screen p-8 space-y-8">
      
      <h1 className="text-4xl font-bold mb-4 text-center">
        PID Control in Spatial Intelligence Systems
      </h1>

      <p>
        In the field of autonomous systems and robotic navigation, spatial intelligence—the ability to perceive, interpret, and interact with spatial environments—requires precise and adaptable control mechanisms. One of the most fundamental and widely adopted algorithms for achieving this control is the Proportional-Integral-Derivative (PID) controller. This paper provides an overview of the PID algorithm and explores its critical role in enabling spatial intelligence across various domains.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Mathematical Formulation
      </h2>

      <p>
        The PID controller computes a corrective input <em>u(t)</em> based on the current error signal <em>e(t)</em>, which is the difference between a desired setpoint and the current system output. The control law is given by:
      </p>

      <div className="flex justify-center my-4">
        <Image
          src="/equation.png"
          alt="PID Control Equation"
          width={977}
          height={80}
          priority
        />
      </div>

      <p>
        where: <br />
        - <em>Kₚ</em> is the proportional gain, <br />
        - <em>Kᵢ</em> is the integral gain, <br />
        - <em>Kd</em> is the derivative gain, <br />
        - <em>τ</em> is a dummy variable of integration.
      </p>

      <p>
        The proportional term responds to the current magnitude of the error, the integral term accounts for the accumulation of past errors, and the derivative term predicts future error based on its rate of change.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Control Architecture
      </h2>

      <p>
        The standard architecture of a PID controller is illustrated in the following block diagram:
      </p>

      <div className="flex justify-center">
        <Image
          src="/diagram.png"
          alt="PID Control Block Diagram"
          width={918}
          height={467}
          priority
        />
      </div>

      <p>
        The error signal is simultaneously fed into three parallel pathways corresponding to the proportional, integral, and derivative terms. These contributions are summed to form the control input that drives the system toward the desired output. This structure enables the controller to correct deviations effectively and maintain system stability under dynamic conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 text-center">
        Demo
        <Demo />
      </h2>

      <h2 className="text-2xl font-semibold mt-8">
        Application to Spatial Intelligence
      </h2>

      <p>
        PID controllers play an indispensable role in systems requiring spatial reasoning and dynamic interaction with physical environments. Applications include:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>Path Tracking and Navigation:</strong> Robots and autonomous vehicles utilize PID control to minimize deviation from paths, adjusting steering and velocity accordingly.</li>
        <li><strong>Balance and Stabilization:</strong> Systems such as drones, bipedal robots, and inverted pendulums employ PID loops to maintain balance against external disturbances.</li>
        <li><strong>Obstacle Avoidance:</strong> By leveraging the derivative component, robots can react swiftly to changing environments, thereby enhancing spatial responsiveness.</li>
        <li><strong>Precision Positioning:</strong> Industrial robotic arms and surgical robots use finely tuned PID controllers to achieve sub-millimeter positional accuracy over time.</li>
      </ul>

      <p>
        The adaptability and robustness of PID control are essential for realizing the dynamic decision-making and real-time correction demands inherent in spatial intelligence.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Conclusion
      </h2>

      <p>
        The Proportional-Integral-Derivative controller remains a cornerstone technology for the development of spatially intelligent systems. Its ability to manage real-time feedback, correct errors, and predict future system behavior makes it uniquely suited for environments that demand precise spatial awareness and adaptation. As the field of spatial intelligence continues to advance, PID control will remain a fundamental technique supporting future innovations.
      </p>
    </div>
  );
}
