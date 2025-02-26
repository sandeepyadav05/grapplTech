// import React, { useEffect, useState } from 'react'
import "../styles/counting.scss";
// function Counting() {
//     const [counters, setCounters] = useState({
//         happyClients: 0,
//         completedProjects: 0,
//         years: 0,
//         awards: 0,
//       });

//       const targets = {
//         happyClients: 25,
//         completedProjects: 8,
//         years: 15,
//         awards: 95,
//       };

//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCounters((prevCounters) => ({
//             happyClients:
//               prevCounters.happyClients < targets.happyClients
//                 ? prevCounters.happyClients + 1
//                 : targets.happyClients,
//             completedProjects:
//               prevCounters.completedProjects < targets.completedProjects
//                 ? prevCounters.completedProjects + 1
//                 : targets.completedProjects,
//             years:
//               prevCounters.years < targets.years
//                 ? prevCounters.years + 1
//                 : targets.years,
//             awards:
//               prevCounters.awards < targets.awards
//                 ? prevCounters.awards + 1
//                 : targets.awards,
//           }));
//         }, 300); // Update counters every second

//         return () => clearInterval(interval);
//       }, []);
//   return (
//     <div>
//          <div className="counter-section container  ">
//         <div className="counter-item  ">
//           <h2>{counters.completedProjects}K+</h2>
//           <p>
//             Project <br /> Completed
//           </p>
//         </div>
//         <div className="counter-item ">
//           <h2>{counters.happyClients}K+</h2>
//           <p>
//             Happy <br />
//             Customers
//           </p>
//         </div>
//         <div className="counter-item ">
//           <h2>{counters.years}</h2>
//           <p>
//             Years <br /> Experiences
//           </p>
//         </div>
//         <div className="counter-item ">
//           <h2>{counters.awards}</h2>
//           <p>
//             Awards <br /> Achievment
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Counting

import React, { useEffect, useState } from "react";
import "../styles/counting.scss";
import { useInView } from "react-intersection-observer";

function Counting() {
  const [counters, setCounters] = useState({
    happyClients: 0,
    completedProjects: 0,
    years: 0,
    awards: 0,
  });

  const targets = {
    happyClients: 25,
    completedProjects: 8,
    years: 15,
    awards: 95,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        happyClients:
          prevCounters.happyClients < targets.happyClients
            ? prevCounters.happyClients + 1
            : targets.happyClients,
        completedProjects:
          prevCounters.completedProjects < targets.completedProjects
            ? prevCounters.completedProjects + 1
            : targets.completedProjects,
        years:
          prevCounters.years < targets.years
            ? prevCounters.years + 1
            : targets.years,
        awards:
          prevCounters.awards < targets.awards
            ? prevCounters.awards + 1
            : targets.awards,
      }));
    }, 300); // Update counters every second

    return () => clearInterval(interval);
  }, []);

  const { ref: ref, inView: inView } = useInView({ triggerOnce: false });
  const { ref: ref1 , inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2 , inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3 , inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: ref4 , inView: inView4 } = useInView({ triggerOnce: false });
  const { ref: ref5 , inView: inView5 } = useInView({ triggerOnce: false });

  return (
    <div>
      <section class="counter__area">
        <div class="container g-0 line pb-140 pt-140">
          <span className="line-3"></span>
          <div class="row">
            <div class="col-xxl-12">
              <div class="counter__wrapper-2 counter_animation">
              <div ref={ref} className={`animationCounting animation-delay-0 ${inView ? 'visible' : ''}`}>

                <div
                  class="counter__item-2 counter__anim"
                  style={{
                    translate: " none",
                    rotate: "none",
                    scale: "none",
                    
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <h2
                    class="counter__number is-visible"
                    style={{ visibility: "visible" }}
                  >
                    {counters.completedProjects}k+
                  </h2>
                  <p>
                    Project <br />
                    completed
                  </p>
                  <span class="counter__border"></span>
                </div>
                </div>
                <div ref={ref1} className={`animationCounting animation-delay-1 ${inView1 ? 'visible' : ''}`}>
                <div
                  class="counter__item-2 counter__anim"
                  style={{
                    translate: " none",
                    rotate: "none",
                    scale: "none",
                    transform: "transtyle=late(0px, 0px)",
                  }}
                >
                  <h2
                    class="counter__number is-visible"
                    style={{ visibility: "visible" }}
                  >
                    {counters.happyClients}k+
                  </h2>
                  <p>
                    Happy <br />
                    customers
                  </p>
                  <span class="counter__border"></span>
                </div>
                </div>
                <div ref={ref2} className={`animationCounting animation-delay-2 ${inView2 ? 'visible' : ''}`}>
                {/* <div
                  class="counter__item-2 counter__anim"
                  style={{
                    translate: " none",
                    rotate: "none",
                    scale: "none",
                    
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <h2
                    class="counter__number is-visible"
                    style={{ visibility: "visible" }}
                  >
                    {counters.years}
                  </h2>
                  <p>
                    Years <br />
                    experiences
                  </p>
                  <span class="counter__border"></span>
                </div> */}
                </div>
                <div ref={ref3} className={`animationCounting animation-delay-3 ${inView3 ? 'visible' : ''}`}>
                <div
                  class="counter__item-2 counter__anim"
                  style={{
                    translate: " none",
                    rotate: "none",
                    scale: "none",
                    
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <h2
                    class="counter__number is-visible"
                    style={{ visibility: "visible" }}
                  >
                    {counters.awards}
                  </h2>
                  <p>
                    Awards <br />
                    achievement
                  </p>
                  <span class="counter__border"></span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counting;
