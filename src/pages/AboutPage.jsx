import React, { useState } from "react";
import "../styles/about.scss";
import award from "../assets/About/award.png";
import video from "../assets/About/video.mp4";
import { MdArrowOutward } from "react-icons/md";
import image from "../assets/About/Image.png";
import Members from "../assets/About/Members.png";
import UperFooter from "../components/UperFooter";
import Counting from "../components/Counting";
import image1 from "../assets/About/1.jpg";
import image2 from "../assets/About/2.jpg";
import image3 from "../assets/About/3.jpg";
import image4 from "../assets/About/4.jpg";
import { useInView } from "react-intersection-observer";
const AboutPage = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });


  const imageItems = [
    { src: image1, alt: 'Image 1', title: 'Image 1', description: 'Description of Image 1' },
    { src: image2, alt: 'Image 2', title: 'Image 2', description: 'Description of Image 2' },
    { src: image3, alt: 'Image 3', title: 'Image 3', description: 'Description of Image 3' },
    { src: image4, alt: 'Image 4', title: 'Image 4', description: 'Description of Image 4' },
    { src: image1, alt: 'Image 5', title: 'Image 5', description: 'Description of Image 5' },
    { src: image2, alt: 'Image 6', title: 'Image 6', description: 'Description of Image 6' },
    { src: image4, alt: 'Image 6', title: 'Image 6', description: 'Description of Image 6' },
  ];  

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
  // const [activeIndex, setActiveIndex] = useState(null);

  // const handleClick = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };
  return (
    <div >
    <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
              <div ref={ref1} className={`animationAbout1 animation-delay-0 ${inView1 ? 'visible' : ''}`}>
                <h1 className="hero-title">
                  We’re a full service creative and digital agency, working
                  globally with the largest brands
                </h1>
                 </div>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                  <div ref={ref1} className={`animationAbout2 animation-delay-0 ${inView1 ? 'visible' : ''}`}>
                    
                    <div className="btn_wrapper wc-btn-pink" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} > 
   <div className="color-overlay"
                style={{
                    clipPath: hoverStyle.clipPath,
                    '--x': hoverStyle.x,
                    '--y': hoverStyle.y
                }}>
              </div>
              <a
                        href="service.html"
                        className="wc-btn-primary btn-hover btn-item "
                        style={{color:"white"}}
                      >
                        <span></span> Trends &amp; <br />
                        technology
                        <MdArrowOutward  />
                      </a>
              </div>
                    </div>
                  </div>
                  <div
                    className="hero__about-text title-anim"
                    style={{ perspective: "400px" }}
                  >
                  <div ref={ref1} className={`animationAbout2 animation-delay-0 ${inView1 ? 'visible' : ''}`}>
                    <div >
                      <p style={{color:"#999"}}>
                        Think of the world's most iconica and successful brands
                        easily findable, impactful. Interactional and
                        exceptional designs. Our story takes beginning in 2013
                      </p>
                    </div>
                    </div>
                  </div>
                  <div className="hero__about-award">
                    <img src={award} alt="Best Studio Award" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-color-dark text-white about-page ">
    
        <section className="story__area">
          <div className="container g-0 line ">
            <span className="line-3"></span>
            <div className="sec-title-wrapper">
              <div className="from-text">
                from
                <span>1990</span>
              </div>

              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2
                    className="sec-sub-title title-anim"
                    style={{ perspective: "400px" }}
                  >
               <div ref={ref2} className={`animationAbout2 animation-delay-0 ${inView2 ? 'visible' : ''}`}>
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transformOrigin: "268px 10.8px",
                        transform: "translate3d(0px, 0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      Digital Studio
                    </div>
                    </div>
                  </h2>
                  <h3
                    className="sec-titles title-anim"
                    style={{ perspective: "400px" }}
                  >
              <div ref={ref2} className={`animationAbout2 animation-delay-0 ${inView2 ? 'visible' : ''}`}>
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        color:"white",
                        transformOrigin: "268px 30x",
                        transform: "translate3d(0px, 0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      Our story
                    </div>
                    </div>
                  </h3>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="story__text">
                    <p>
                      Your brand is the most important asset in your company let
                      our team of professionals help you with a good strategy
                      took the runway next with an edgy collection featuring
                      dyed denim pieces. The collection included patchwork
                      denim, a trend that has recently exploded in younger
                      generations. Playing on aspects of sustainability, the
                      pieces appeared to be upcycled to establish dimension and
                      flair. This take on grunge and streetwear took sustainable
                      fashion to an entirely new level.
                    </p>
                    <p>
                      ur specialized team of researchers, strategists,
                      designers, developers, and project managers work with
                      streamlined processes to break through organizational
                      roadblocks. We translate research into solutions, crafting
                      thoughtful and unified brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="story__img-wrapper">
                  <img src={image1} alt="Story Thumbnail" className="w-100" />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="story__img-wrapper img-anim">
                  <img
                    src={image2}

                    alt="Story Thumbnail"
                    data-speed="auto"
                    data-lag="0"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: " none",
                      transform: "translate(0px, 101.809px)",
                      willChange: "transform",
                    
                    }}
                  />
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="story__img-wrapper">
                  <img src={image3} alt="Story Thumbnail" className="imagetop"/>
                  <img src={image4} alt="Story Thumbnail" />
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <Counting />

        <div className="row justify-content-between">
          <div className="col-md-7 mt-5 p-5">
            <p>
              Think of the world's most iconica and successful brands easily
              findable, impactful, interactional and exceptional designs. OUr
              story takes beginning in 2013. Think of the world's most iconica
              and successful brands easily findable, impactful, interactional
              and exceptional designs. OUr story takes beginning in 2013 Think
              of the world's most iconica and successful brands easily findable,
            </p>
          </div>
          <div className="col-5">
            <p className="hallow-half-circle"></p>
          </div>
        </div>

        {/* <div className="row p-1 our-team justify-content-evenly">
          <div className="col-sm-3 ">
            <img src={image} />
            <div className="text-center name ">
              <h3>Jennifer Lawrence</h3>
              <p>UI/UX Designr</p>
            </div>
          </div>
          <div className="col-sm-1 ">
            <img src={image} />
          </div>
          <div className="col-sm-1">
            <img src={image} />
          </div>
          <div className="col-sm-1">
            <img src={image} />
          </div>
          <div className="col-sm-1">
            <img src={image} />
          </div>
          <div className="col-sm-1">
            <img src={image} />
          </div>
          <div className="col-sm-1">
            <img src={image} />
          </div>
          <div className="col-sm-1">
            <img src={image} />
          </div>
        </div> */}
        <div className="image-row">
      {imageItems.map((item, index) => (
        <div className="image-item" key={index}>
          <img src={item.src} alt={item.alt} />
          <div className="overlay">
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
      </div>
      <UperFooter />
    </div>
  );
};

export default AboutPage;
