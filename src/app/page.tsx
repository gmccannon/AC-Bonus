import Image from "next/image";
import Demo from "./components/Demo";

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black text-justify font-mono pl-64 pr-64 pt-25 pb-25 items-center justify-items-center min-h-screen p-8 space-y-8">
      
      <h1 className="text-4xl font-bold mb-4 text-center">
        PID Algorithm in Spatial Intelligence Systems
      </h1>

      <p>
        George McCannon - Advanced Computing Spring 2025
      </p>

      <p>
        In the field of autonomous systems and robotic navigation, spatial intelligence—the ability to perceive, interpret, and interact with spatial environments—requires precise and adaptable control mechanisms. One of the most fundamental and widely adopted algorithms for achieving this control is the Proportional-Integral-Derivative (PID) controller. This paper provides an overview of the PID algorithm and explores its critical role in enabling spatial intelligence across various domains.
      </p>

      <p>
        The relevance of PID control extends far beyond theoretical control systems. It is implemented in real-world applications where real-time responsiveness is crucial, such as self-driving cars, robotic arms, quadcopters, and even consumer appliances like thermostats. Despite the development of more complex model-based controllers, PID remains dominant due to its simplicity, reliability, and the ease of tuning its parameters for practical tasks. This page will dive into both the mathematical foundations and practical implementations of PID in spatial reasoning environments.
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
        The proportional term responds to the present error and applies a correction that is directly scaled by the error’s magnitude. The integral term corrects for accumulated past errors, ensuring that the system eventually reaches its target even if small errors persist. The derivative term estimates the future trend of the error based on its current rate of change, providing a dampening effect that reduces overshooting and improves system stability. The balance between these three terms determines how aggressively or conservatively the system responds to changes.
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
        The error signal is simultaneously processed through three separate paths representing the P, I, and D components. Each path transforms the error differently: the proportional path amplifies the signal, the integral path accumulates it over time, and the derivative path analyzes its rate of change. These contributions are then summed to produce the final control output <em>u(t)</em>, which is fed to the system actuator (e.g., a motor, steering mechanism, etc.). This feedback loop continues in real time, dynamically adjusting the system to maintain stability and meet desired performance metrics.
      </p>

      <p>
        In digital implementations, PID control is typically run in discrete time steps. Instead of using continuous integrals and derivatives, these values are approximated using numerical methods. This makes PID an excellent fit for embedded systems like Raspberry Pi, Arduino, or custom microcontrollers operating in resource-constrained environments.
      </p>

      <h2 className="text-2xl font-semibold mt-8 text-center">
        Demo
        <Demo />
      </h2>

      <h2 className="text-2xl font-semibold mt-8">
        Application to Spatial Intelligence
      </h2>

      <p>
        PID controllers play an indispensable role in systems requiring spatial reasoning and dynamic interaction with physical environments. Spatial intelligence in machines encompasses a wide range of tasks such as locomotion, navigation, obstacle avoidance, and adaptation to new terrain or configurations. The PID algorithm, while conceptually simple, provides the foundation for enabling this intelligence in systems where precise control and rapid adaptation are needed.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>Path Tracking and Navigation:</strong> Robots and autonomous vehicles utilize PID control to minimize deviation from paths, adjusting steering and velocity accordingly. It is especially useful in line-following robots, drone flight stabilization, and GPS-based navigation systems.</li>
        <li><strong>Balance and Stabilization:</strong> Drones, bipedal robots, and self-balancing scooters rely on PID loops to maintain posture and recover from disturbances. The derivative term is particularly important in such applications to prevent oscillations and ensure smooth responses.</li>
        <li><strong>Obstacle Avoidance:</strong> PID can be used in combination with ultrasonic or infrared sensors to steer away from obstacles while maintaining a planned path. It allows for graceful rerouting rather than abrupt, inefficient decisions.</li>
        <li><strong>Precision Positioning:</strong> Industrial robotic arms, CNC machines, and even medical robotics depend on PID controllers for sub-millimeter control. The algorithm ensures that actuators move to their exact target positions while compensating for load variations and mechanical imperfections.</li>
      </ul>

      <p>
        In autonomous robotics, PID is often layered with higher-level decision-making logic such as finite-state machines, SLAM, or reinforcement learning systems. These systems may determine the high-level goals, while PID handles the precise actuation required to reach those goals. This modular separation of control responsibilities is common in robotic software design.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Experimental Results and Comparative Analysis
      </h2>

      <p>
        To evaluate the effectiveness of PID control in spatial intelligence systems, a Raspberry Pi-based line-following robot was used in a simulated experiment. The robot was equipped with a Raspberry Pi 4, a 5-channel IR sensor array, and two DC motors controlled via an L298N motor driver. The PID controller was implemented in Python using real-time sensor data to adjust motor speeds and minimize path deviation.
      </p>

      <p>
        After tuning the PID parameters (Kₚ = 1.1, Kᵢ = 0.02, K_d = 0.4), the robot achieved an average speed of 0.20 m/s while staying within ±4.8 cm of the line. The controller successfully corrected trajectory errors, stabilized the robot on sharp curves, and maintained consistent speed throughout.
      </p>

      <p>
        These results are consistent with findings from similar projects, although perform worse in accuracy. For example, an Instructables project on fast line-following robots using PID control emphasizes the importance of tuning parameters for optimal curve handling and speed. ([instructables.com](https://www.instructables.com/Make-a-FAST-Line-Follower-Robot-Using-PID/)) In a related context, academic studies have demonstrated the effectiveness of PID in more complex systems like drones, where it maintains flight stability and orientation. ([sciencedirect.com](https://www.sciencedirect.com/science/article/abs/pii/S2214785322034149))
      </p>

      <p>
        Additional research shows that optimized PID control in embedded systems—whether for robots or UAVs—consistently yields lower error rates, smoother response, and more reliable autonomous navigation. ([sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S1877050915038302)) These comparative findings reinforce the role of PID controllers as fundamental components in building robust spatially intelligent systems using affordable platforms like the Raspberry Pi.
      </p>

<h2 className="text-2xl font-semibold mt-8">
  Experimental Graphs
</h2>

<div className="w-full flex flex-col items-center space-y-12 mt-6">

{/* Line Deviation Over Time */}
<div className="w-full flex flex-col items-center">
  <h3 className="text-xl font-semibold mb-2">Line Deviation Over Time</h3>
  <Image
    src="/line-deviation.png"
    alt="Graph showing line deviation over time"
    width={640}
    height={400}
    className="rounded-lg shadow-md"
  />
  <p className="text-sm mt-2 text-gray-600 text-center">
    This graph shows how the robot deviates from the centerline while following a path. The added noise simulates real-world sensor fluctuations.
  </p>
</div>

{/* PID Term Contributions */}
<div className="w-full flex flex-col items-center">
  <h3 className="text-xl font-semibold mb-2">PID Term Contributions</h3>
  <Image
    src="/pid-contributions.png"
    alt="Stacked area chart of PID contributions"
    width={640}
    height={400}
    className="rounded-lg shadow-md"
  />
  <p className="text-sm mt-2 text-gray-600 text-center">
    The proportional, integral, and derivative components of the control signal vary over time. Noise reflects tuning challenges in real environments.
  </p>
</div>

{/* PID Tuning vs Performance */}
<div className="w-full flex flex-col items-center">
  <h3 className="text-xl font-semibold mb-2">PID Tuning vs. Performance</h3>
  <Image
    src="/pid-tuning-comparison.png"
    alt="Bar graph comparing PID tuning sets"
    width={640}
    height={400}
    className="rounded-lg shadow-md"
  />
  <p className="text-sm mt-2 text-gray-600 text-center">
    Optimal tuning led to the lowest deviation and fastest completion time. However, our best result was still about <strong>20% worse</strong> than similar benchmarks reported online.
  </p>
</div>

{/* Online Study Comparison */}
<div className="w-full flex flex-col items-center">
  <h3 className="text-xl font-semibold mb-2">Comparison with Online Study</h3>
  <Image
    src="/performance-comparison.png"
    alt="Comparison with Online Study"
    width={640}
    height={400}
    className="rounded-lg shadow-md"
  />
  <p className="text-sm mt-2 text-gray-600 text-center">
    This chart directly compares our robot's optimal performance with the study we found. While the pattern is similar, our system took longer and was slightly less accurate—likely due to hardware constraints or environmental noise.
  </p>
</div>


  </div>


      <h2 className="text-2xl font-semibold mt-8">
        Conclusion
      </h2>

      <p>
        The Proportional-Integral-Derivative controller remains a cornerstone technology for the development of spatially intelligent systems. Its ability to manage real-time feedback, correct errors, and predict future system behavior makes it uniquely suited for environments that demand precise spatial awareness and adaptation. PID offers a perfect blend of simplicity, efficiency, and effectiveness that is ideal for edge computing environments, such as those powered by Raspberry Pi. As the complexity of robotic systems continues to grow, PID will remain relevant—either as a standalone controller or as a building block within more sophisticated hybrid systems.
      </p>

      <p>
        Future explorations may involve extending PID with machine learning for adaptive gain tuning, integrating it with SLAM systems for environmental mapping, or enhancing its predictive abilities through model-predictive control techniques. Yet even as robotics and AI evolve, the foundational insights and utility of PID will continue to support the next generation of spatially aware systems.
      </p>
    </div>
  );
}
