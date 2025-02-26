import React, { useState } from "react";
import "../styles/uperfooter.scss";
import { useInView } from 'react-intersection-observer';
import { GoArrowUpRight } from "react-icons/go";

function UperFooter() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });


  const [hoverStyle, setHoverStyle] = useState({
    clipPath: 'circle(0% at 0% 0%)',
    x: '0%',
    y: '0%'
});

const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setHoverStyle({
        clipPath: `circle(150% at ${100 - percentX}% ${100 - percentY}%)`,
        x: `${percentX}%`,
        y: `${percentY}%`
    });
};

const handleMouseLeave = () => {
    setHoverStyle({
        clipPath: 'circle(0% at 0% 0%)',
        x: '0%',
        y: '0%'
    });
};
  return (
    <div >
      <div className="bg-lights textDecoration  pb-0 text-center">
        <div ref={ref1} className={`animation animation-delay-1 ${inView1 ? 'visible' : ''}`}>
          <p>Have you project in mind start?</p>
        </div>
        <div ref={ref2} className={`animation animation-delay-1 ${inView2 ? 'visible' : ''}`}>
          <h1>Let's make something <br /> greate together!</h1>
        </div>
        <div ref={ref3} className={` animation animation-delay-2 mt-4  ${inView3 ? 'visible' : ''}`}>
        
        <div className="hollow-circle4 wc-btn-pink" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} > 
   <div className="color-overlay"
                style={{
                    clipPath: hoverStyle.clipPath,
                    '--x': hoverStyle.x,
                    '--y': hoverStyle.y
                }}>
              </div>
              <a
                href="service.html"               
              >
                Contact with Us
                 <GoArrowUpRight></GoArrowUpRight>
              </a>
              </div>

        </div>      
      </div>
    </div>
  );
}

export default UperFooter;
