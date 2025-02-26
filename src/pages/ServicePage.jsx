import React from "react";
import "../styles/servicepage.scss";
import serviceImage from "../assets/ServicePage/demo-branding-agency-services-title-bg.jpg";
import image2 from '../assets/ServicePage/demo-branding-agency-services-02.jpg';
import image1 from '../assets/ServicePage/demo-branding-agency-services-01.jpg';
import RoutedImg from '../assets/ServicePage/demo-branding-agency-about-01.webp';
import { HiPlus } from "react-icons/hi";
import { FaRegPaperPlane } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";


function ServicePage() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: false });

  return (
    <div>
     
      <section 
        className="pt-5 top-space-margin position-relative overflow-hidden"
      >
        <div className=" pt-4  position-relative">
          <div className="row g-0">
           
            <div
              className="col-xl-4 col-lg-5 d-flex text-light justify-content-center align-items-center ps-10 xxl-ps-6 xl-ps-4 md-ps-4 sm-ps-0 position-relative order-2 order-lg-1 appear anime-child anime-complete"
              
            >
              <div
                className="vertical-title-center align-items-center justify-content-center flex-shrink-0 w-75px sm-w-50px"
                style={{}}
              >
                <h1
                  className="title  alt-font  fw-700 text-uppercase ls-1px text-uppercase d-flex w-auto align-items-center m-0 appear"
                  data-fancy-text='{
                    "opacity": [0, 1],
                    "translateY": [50, 0],
                    "filter": ["blur(20px)", "blur(0px)"],
                    "string": ["contact us"],
                    "duration": 400,
                    "delay": 0,
                    "speed": 50,
                    "easing": "easeOutQuad"
                  }'
                >
                  <span
                    className="anime-text words chars splitting"
                    data-splitting="true"
                    style={{ '--word-total': 2, '--char-total': 9 }}
                  >
                    <span className="word" data-word="contact" style={{ '--word-index': 0 }}>
                      <span
                        className="char"
                        data-char="c"
                        style={{ '--char-index': 0, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        c
                      </span>
                      <span
                        className="char"
                        data-char="o"
                        style={{ '--char-index': 1, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        o
                      </span>
                      <span
                        className="char"
                        data-char="n"
                        style={{ '--char-index': 2, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        n
                      </span>
                      <span
                        className="char"
                        data-char="t"
                        style={{ '--char-index': 3, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        t
                      </span>
                      <span
                        className="char"
                        data-char="a"
                        style={{ '--char-index': 4, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        a
                      </span>
                      <span
                        className="char"
                        data-char="c"
                        style={{ '--char-index': 5, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        c
                      </span>
                      <span
                        className="char"
                        data-char="t"
                        style={{ '--char-index': 6, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        t
                      </span>
                    </span>
                    <span className="whitespace"> </span>
                    <span className="word" data-word="us" style={{ '--word-index': 1 }}>
                      <span
                        className="char"
                        data-char="u"
                        style={{ '--char-index': 7, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        u
                      </span>
                      <span
                        className="char"
                        data-char="s"
                        style={{ '--char-index': 8, opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                      >
                        s
                      </span>
                    </span>
                  </span>
                </h1>
              </div>
              <div
               className="border-start border-dark-gray  position-relative " style={{paddingLeft:"40px",zIndex:"9"}}
              >
                <h2 className="z-3 fw-medium" style={{marginRight:"-10vw",fontSize:"3.438rem", lineHeight:"3.438rem"}}>
                  We're here to here answer &amp; question you may have.
                </h2>
              </div>
            </div>
            
          
            <div className="col-xl-8 col-lg-7 position-relative one-half-screen order-1 order-lg-2 md-mb-50px">
              <div className="overflow-hidden position-relative">
                <div
                  className="w-100 appear"
                  data-anime='{
                    "effect": "slide",
                    "direction": "lr",
                    "color": "#f7f7f7",
                    "duration": 1000,
                    "delay": 0
                  }'
                  style={{ position: 'relative' }}
                >
                  <img
                    src={serviceImage}
                    alt=""
                    className="w-100 imageanimation liquid-parallax"
                    data-parallax-liquid="true"
                    data-parallax-position="top"
                    data-parallax-scale="1.05"
                    data-no-retina=""
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="row mb-6 sm-mb-50px text-light">
            <div className="col-md-12 text-center text-md-start appear  anime-complete">
            <div ref={ref3} className={`animationService animation-delay-0 ${inView3 ? 'visible' : ''}`}>

              <div
                className=" fw-medium "
                style={{ transform: "translate3d(44.7244px, 0px, 0px)",fontSize:"8rem" }}
              >
                Digital solution
              </div>
              </div>
            </div>
            <div class="col-12">
              <div
                class="row align-items-center align-items-lg-end  skrollable skrollable-between"
                data-bottom-top="transform: translate3d(-30px, 0px, 0px);"
                data-top-bottom="transform: translate3d(30px, 0px, 0px);"
                style={{ transform: "translate3d(14.1544px, 0px, 0px)" }}
              >
                <div className="col-lg-3 col-md-4 text-md-end text-center md-mt-30px md-mb-20px appear anime-complete" data-anime="{&quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;:0, &quot;staggervalu">
                  <div className="position-relative">
                    <img
                      src={RoutedImg}
                      className="imagerouted"
                      alt=""
                      style={{verticalAlign:"middle"}}
                      data-no-retina
                    />
                    <div className="PaperPlane">
                    <FaRegPaperPlane />

                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 text-center text-md-start ">
                <div ref={ref3} className={`animationService animation-delay-0 ${inView3 ? 'visible' : ''}`}>

                  <div  className=" fw-medium lh-1" style={{fontSize:"8rem"}}>
                    agency
                  </div>
                  </div>

                </div>
                <div className="col-lg-4 ">
                <div ref={ref3} className={`animationService animation-delay-0 ${inView3 ? 'visible' : ''}`}>
                  <p className="fs-5" style={{color:"#999"}}>
                    Creating products with a strong identity. We provide
                    brilliant ideas and adding the world called success brand.{" "}
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-5 mb-5">
              <div style={{borderTop:"1px solid #999"}}></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-0 branding-solutions">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 text-md-end position-relative">
            <span className="text-sliding-line textColor">01</span>
          </div>
          <div className="col-xl-3">
          <div ref={ref4} className={`animationService1 animation-delay-0 ${inView4 ? 'visible' : ''}`}>
            <h3 className="display-5 fw-medium text-light">Branding solutions</h3>
          </div>
          </div>
          <div className="col-lg-6 offset-xl-1 mt-3 mt-md-0">
          <div ref={ref4} className={`animationService1 animation-delay-0 ${inView4 ? 'visible' : ''}`}>
            <p className="textColor" >
              We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent web solutions which is best in-class experience for our clients.
            </p>
            </div>
            <div className="row text-light">
              <div className="col-xl-5 col-md-6 ">
              <div ref={ref4} className={`animationService1 animation-delay-0 ${inView4 ? 'visible' : ''}`}>
                <ul className="list-unstyled fw-500   lh-lg">
                  <li><HiPlus /> Brand strategy</li>
                  <li><HiPlus /> Video production</li>
                  <li><HiPlus /> Research and testing</li>
                  <li><HiPlus /> Usability consulting</li>
                </ul>
              </div>
              </div>
              <div className="col-xl-5 col-md-6">
              <div ref={ref4} className={`animationService1 animation-delay-0 ${inView4 ? 'visible' : ''}`}>
                <ul className="list-unstyled text-dark-gray fw-500 lh-lg">
                  <li><HiPlus /> Art direction</li>
                  <li><HiPlus /> Graphic design</li>
                  <li><HiPlus /> Content creation</li>
                  <li><HiPlus /> Web development</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8 mb-3">
            <div className="position-relative">
              <img src={image1} alt="Branding Solution 1" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="position-relative">
              <img src={image2} alt="Branding Solution 2" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="pt-0 branding-solutions">
      <div className="container">
        <div className="row ">
          <div className="col-lg-2 col-md-2 text-md-end position-relative">
            <span className="text-sliding-line textColor">02</span>
          </div>
          <div className="col-xl-3 text-light">
          <div ref={ref5} className={`animationService1 animation-delay-0 ${inView5 ? 'visible' : ''}`}>
            <h3 className="display-5 fw-medium">Website development</h3>
          </div>
          </div>
          <div className="col-lg-6 offset-xl-1 mt-3 mt-md-0">
          <div ref={ref5} className={`animationService1 animation-delay-0 ${inView5 ? 'visible' : ''}`}>
            <p className="textColor">
              We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent web solutions which is best in-class experience for our clients.
            </p>
            </div>
            <div className="row text-light">
              <div className="col-xl-5 col-md-6 ">
              <div ref={ref5} className={`animationService1 animation-delay-0 ${inView5 ? 'visible' : ''}`}>
                <ul className="list-unstyled fw-500 lh-lg">
                  <li><HiPlus /> API development</li>
                  <li><HiPlus /> Cloud migration</li>
                  <li><HiPlus /> Research and testing</li>
                  <li><HiPlus /> JavaScript</li>
                </ul>
              </div>
              </div>
              <div className="col-xl-5 col-md-6">
              <div ref={ref5} className={`animationService1 animation-delay-0 ${inView5 ? 'visible' : ''}`}>
                <ul className="list-unstyled text-dark-gray fw-500 lh-lg">
                  <li><HiPlus /> WordPress</li>
                  <li><HiPlus /> Graphic design</li>
                  <li><HiPlus /> Custom website</li>
                  <li><HiPlus /> Flutter framework</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8 mb-3">
            <div className="position-relative">
              <img src={image1} alt="Branding Solution 1" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="position-relative">
              <img src={image2} alt="Branding Solution 2" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="pt-0 branding-solutions">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 text-md-end position-relative">
            <span className="text-sliding-line textColor">03</span>
          </div>
          <div className="col-xl-3 text-light">
          <div ref={ref6} className={`animationService1 animation-delay-0 ${inView6 ? 'visible' : ''}`}>
            <h3 className="display-5 fw-medium">eCommerce solutions</h3>
          </div>
          </div>
          <div className="col-lg-6 offset-xl-1 mt-3 mt-md-0">
          <div ref={ref6} className={`animationService1 animation-delay-0 ${inView6 ? 'visible' : ''}`}>
            <p className="textColor">
              We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent web solutions which is best in-class experience for our clients.
            </p>
            </div>
            <div className="row text-light  ">
              <div className="col-xl-5 col-md-6">
              <div ref={ref6} className={`animationService1 animation-delay-0 ${inView6 ? 'visible' : ''}`}>
                <ul className="list-unstyled fw-500 lh-lg">
                  <li><HiPlus /> Shipping features</li>
                  <li><HiPlus /> Cloud migration</li>
                  <li><HiPlus /> Payment gateways</li>
                  <li><HiPlus /> Categorization</li>
                </ul>
              </div>
              </div>
              <div className="col-xl-5 col-md-6">
              <div ref={ref6} className={`animationService1 animation-delay-0 ${inView6 ? 'visible' : ''}`}>
                <ul className="list-unstyled text-dark-gray fw-500 lh-lg">
                  <li><HiPlus /> CMS solutions</li>
                  <li><HiPlus /> eCommerce platform</li>
                  <li><HiPlus /> Custom website</li>
                  <li><HiPlus /> Apps development</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8 mb-3">
            <div className="position-relative">
              <img src={image1} alt="Branding Solution 1" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="position-relative">
              <img src={image2} alt="Branding Solution 2" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  );
}

export default ServicePage;
