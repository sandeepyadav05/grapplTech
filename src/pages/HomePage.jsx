import React, { useEffect, useRef, useState } from "react";
import Sock from "./../assets/Home/10.png";
import arrow from "./../assets/Home/arrow.png";
import rowImage from "./../assets/Home/row2-image.jpeg";
import A from "./../assets/Home/A.png";
import U from "./../assets/Home/U.png";
import C from "./../assets/Home/C.png";
import D from "./../assets/Home/D.png";
import { GoArrowUpRight } from "react-icons/go";
import image1 from "../assets/Home/1.png";
import "./../styles/home.scss";
import AutoSlideCarousel from "./../components/AutoSlideCarousel";
import UperFooter from "../components/UperFooter";
import Counting from "../components/Counting";
import { LuPlus } from "react-icons/lu";

import { useInView } from 'react-intersection-observer';

function HomePage() {
 
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: refSecond, inView: inViewSecond } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });
  const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: true });
  const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: true });


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
    <div style={{backgroundColor:"#171717"}}>
      <section className="hero__area-2">
        <div className="hero__inner-2">
        <div ref={ref8} className={`animation1 animation-delay-0 ${inView8 ? 'visible' : ''}`}>

        <div class="col-lg-4  d-flex p-4" data-bs-theme="dark" >
                    <p class="p1">NO DOUBT</p>
                    <hr />
                    <p class="p2">SINCE 2020</p>
                  </div>
                  </div>
          <div className="sec-title-wrapper">  
           <h2 className="sec-title-3 bg-shape">
        <div ref={ref8} className={`animation1 animation-delay-0 ${inView8 ? 'visible' : ''}`}>
              <div className="HeroText">W</div>
              <div className="HeroText">e</div>{" "}
              <div className="HeroText">D</div>
              <div className="HeroText">e</div>
              <div className="HeroText">s</div>
              <div className="HeroText">i</div>
              <div className="HeroText">g</div>
              <div className="HeroText">n</div> <br/>
              <div className="HeroText">U</div>
              <div className="HeroText">n</div>
              <div className="HeroText">i</div>
              <div className="HeroText">q</div>
              <div className="HeroText">u</div>
              <div className="HeroText">e</div>
            </div>
            </h2>
            <div class="col-4">
            <div ref={ref8} className={`animation1 animation-delay-2 ${inView8 ? 'visible' : ''}`}>
                    <img className="row2-col2-img" src={rowImage}/>
                  </div>
                  </div>
            <div ref={ref8} className={`animation1 animation-delay-2 ${inView8 ? 'visible' : ''}`}>

            <h2 className="sec-title-3">
              {" "}
              <div className="HeroText">D</div>
              <div className="HeroText">i</div>
              <div className="HeroText">g</div>
              <div className="HeroText">i</div>
              <div className="HeroText">t</div>
              <div className="HeroText">a</div>
              <div className="HeroText">l</div> <br />
              <div className="HeroText">E</div>
              <div className="HeroText">x</div>
              <div className="HeroText">p</div>
              <div className="HeroText">e</div>
              <div className="HeroText">r</div>
              <div className="HeroText">i</div>
              <div className="HeroText">e</div>
              <div className="HeroText">n</div>
              <div className="HeroText">c</div>
              <div className="HeroText">e</div>
            </h2>
            </div>
          </div>
          <div className="hero__text-2">
          <div ref={ref8} className={`animation1 animation-delay-3 ${inView8 ? 'visible' : ''}`}>

            <p
            >
              Thinking, writing and planning with br  and are just a of what we
              do. For more than 10 years, It’s more competitive space for
              agency.
            </p>
            </div>
            <div ref={ref5} className={`animation1 animation-delay-4 ${inView5 ? 'visible' : ''}`}>

            <div
              className="hero__button wc-btn-pink" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} > 
   <div className="color-overlay"
                style={{
                    clipPath: hoverStyle.clipPath,
                    '--x': hoverStyle.x,
                    '--y': hoverStyle.y
                }}>
              </div>
              <a
                href="service.html"
                className="wc-btn-pink btn-hover btn-item "
               
              >
                <span ></span>
                Explore <br />
                our services <GoArrowUpRight></GoArrowUpRight>
              </a>
              </div>

            </div>
          </div>
        </div>
        <div className="hero2-shape">
        <div ref={ref4} className={`animation1 animation-delay-1 ${inView4 ? 'visible' : ''}`}>
          <img
            src={arrow}
            alt="BG Shape"
           
          />
          </div>
        </div>
      </section>
     
      <section className="feature__area-2">
      <div className="feature__top">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                <div ref={refSecond} className={`animation2 animation-delay-0 ${inViewSecond? 'visible' : ''}`}>
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim" style={{ perspective: "400px", color: "white" }}>

                  <div style={{ display: "block", textAlign: "start", position: "relative", opacity: "1" }}>
                    Features are more helpful
                  </div>
                  <div style={{ display: "block", textAlign: "start", position: "relative", opacity: "1" }}>
                    to create creative shapes
                  </div>
                  <div style={{ display: "block", textAlign: "start", position: "relative", opacity: "1" }}>
                    as well.
                  </div>
                </h2>
              </div>
                  </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
              <div className="feature__text  text-anim" >
                <p style={{ perspective: "400px" }} >
                <div ref={ref10} className={`animation2 animation-delay-1 ${inView10 ? 'visible' : ''}`}>

                  <div style={{ display: "block", textAlign: "start", position: "relative", opacity: "1" }}>
                    We are constantly rethinking the future by creating the
                  </div>
                  <div style={{ display: "block", textAlign: "start", position: "relative", opacity: "1" }}>
                    next generation of products, brands and services from
                  </div>
                  <div style={{ display: "block", textAlign: "start", position: "relative", opacity: "1" }}>
                    a hybrid perspective. The unthinkable today becomes
                  </div>
                  <div style={{ display: "block", textAlign: "start", position: "relative", opacity: "1" }}>
                    inevitable.
                  </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature__btm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            
              <div className="feature__list textColor animation__feature2">
                <div className="feature__item" data-aos="fade-up">
                <div ref={ref9} className={`animation3 animation-delay-0 ${inView9 ? 'visible' : ''}`}>

                  <img src={image1} alt="Feature Icon" />
                  <h3 className="feature__title">Branding</h3>
                  <p>
                    Having these marketplace to your branded skilled team of designers and developers who embracement perfection.
                  </p>
                  </div>
                </div>
                <div className="feature__item" data-aos="fade-up">
                <div ref={ref9} className={`animation3 animation-delay-1 ${inView9 ? 'visible' : ''}`}>

                  <img src={image1} alt="Feature Icon" />
                  <h3 className="feature__title">Optimum</h3>
                  <p>
                    Brand identity design a the key to success whether you breath rebranding an existing business or creating a business
                  </p>
                </div>
                </div>
                <div className="feature__item" data-aos="fade-up">
                <div ref={ref9} className={`animation3 animation-delay-2 ${inView9 ? 'visible' : ''}`}>

                  <img src={image1} alt="Feature Icon" />
                  <h3 className="feature__title">Thinking</h3>
                  <p>
                    Creative typography plays the big role to pull off this trending more effectively with the thinking use a thicker point
                  </p>
                </div>
                </div>
                <div className="feature__item" data-aos="fade-up">
                <div ref={ref9} className={`animation3 animation-delay-3 ${inView9 ? 'visible' : ''}`}>

                  <img src={image1} alt="Feature Icon" />
                  <h3 className="feature__title">Execution</h3>
                  <p>
                    Stricky with multiple shades of the colours. However, this type of alone can look awesome forever an online business
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <AutoSlideCarousel />

      <Counting />
      <div className="pt-5" >
        <div className="container">
          <div className="row mt-2 m-5 justify-content-around text-light"   >
            <div className="col-md-5">
            <div ref={ref1} className={`animation animation-delay-0 ${inView1 ? 'visible' : ''}`}>
              A comprehensive evaluation of herbal face packs reveals several
              commendable properties. These packs have been found to be free
              from skin irritation and maintain their consistency even after
              </div>
              </div>
            <div className="col-md-4">
            <div ref={ref1} className={`animation animation-delay-0 ${inView1 ? 'visible' : ''}`}>

              <h3>
                A comprehensive evaluation of herbal face packs reveals several
                commendable properties. These packs have been
              </h3>
              </div>
            </div>
          </div>
          <div ref={ref2} className={`animationX animation-delay-1 ${inView2 ? 'visible' : ''}`}>

          <div className="row mt-4 justify-content-around">
            {[
              { img: D, title: "Website Development" },
              { img: U, title: "UI/UX Design" },
              { img: A, title: "App Design" },
              { img: C, title: "Content Creation" },
            ].map((item, index) => (
              
              <div
                key={index}
                className={`col-md-2 home-page-forth-window${
                  index === 3 ? "1" : ""
                }`}
              >
              
                <div className="image">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3>
                  {item.title.split(" ").map((word, idx) => (
                    <span key={idx}>
                      {word}
                      <br />
                    </span>
                  ))}
                </h3>
                <p>
                  We help brands stand out through elegant visual design. Our
                  design mainly focuses on philosophy.
                </p>
                <ul>
                  <li>
                    <LuPlus /> Logo Design
                  </li>
                  <li>
                    <LuPlus /> Advertisement
                  </li>
                  <li>
                    <LuPlus /> Promotion
                  </li>
                </ul>
              </div>
            ))}
          </div>
          </div>
          <div ref={ref3} className={`animation animation-delay-1 ${inView3 ? 'visible' : ''}`}>

          <div
              className="hollow-circle2 wc-btn-pink" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} > 
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
               View All Services <GoArrowUpRight/>
              </a>
              </div>
        </div>
        </div>

        <div className="row help-items  text-center">
          <div className="col-12 mb-3">
          <div ref={ref3} className={`animation animation-delay-1 ${inView3 ? 'visible' : ''}`}>

            <h1 className="fw-bold">We can help you with...</h1>
            </div>
          </div>
          <div>
          <div ref={ref3} className={`animation animation-delay-2 ${inView3 ? 'visible' : ''}`}>

            <ul>
              <li>
                <a href="#">Web Design & UI</a>
              </li>
              <li>
                <a href="#">Social media visuals</a>
              </li>
              <li>
                <a href="#">Design System</a>
              </li>
              <li>
                <a href="#">Email Design</a>
              </li>
              <li>
                <a href="#">Packaging & merch</a>
              </li>
            </ul>
          </div>
          </div>
          <div ref={ref3} className={`animation animation-delay-2 ${inView3 ? 'visible' : ''}`}>

          <div>
            <ul>
              <li>
                <a href="#">Signage</a>
              </li>
              <li>
                <a href="#">Brochures</a>
              </li>
              <li>
                <a href="#">Logos & branding</a>
              </li>
              <li>
                <a href="#">Digital ads</a>
              </li>
              <li>
                <a href="#">WireFrames</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <AutoSlideCarousel />

      <div >
        <h2 className="sec-titleImag text-dark">
        <div ref={ref7} className={`animation4 animation-delay-0 ${inView7 ? 'visible' : ''}`}>
          <div style={{ paddingRight: "350px" }}>Selected</div>
          </div>
          <div ref={ref7} className={`animation4 animation-delay-1 ${inView7 ? 'visible' : ''}`}>
          <div>Projects</div>
          </div>
        </h2>
        <p className="text-start textColor container fs-3">
        <div ref={ref7} className={`animation5 animation-delay-0 ${inView7 ? 'visible' : ''}`}>
          <div>Worked with global brands & agency</div>
          <div>at the intersection of flat design and</div>
          <div>digital technology.</div>
          </div>
        </p>
      </div>

      <UperFooter />
    </div>
  );
}

export default HomePage;
