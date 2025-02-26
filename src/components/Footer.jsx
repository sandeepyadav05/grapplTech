
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaRegPaperPlane } from 'react-icons/fa';
import logo from '../assets/Home/Logo.png';
import footerImage from '../assets/Footer/footer.jpg';
import { GoArrowUpRight } from "react-icons/go";

import '../styles/footer.scss';

function Footer() {
  const { ref: widgetRef, inView: widgetInView } = useInView({ triggerOnce: false });
  const { ref: widgetRef1, inView: widgetInView1 } = useInView({ triggerOnce: false });
  const { ref: widgetRef2, inView: widgetInView2 } = useInView({ triggerOnce: false });
  const { ref: widgetRef3, inView: widgetInView3 } = useInView({ triggerOnce: false });
  const { ref: widgetRef4, inView: widgetInView4 } = useInView({ triggerOnce: false });

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
    <footer className='footer_area'>
      <div className="footer_top">
      <div className={`footer_widget ${widgetInView ? 'animate' : ''}`} ref={widgetRef} >
        <div className='container footer-line'></div>
        <img src={footerImage} alt="" />
        </div>
      </div>
      <div className='btn-footer'>
        <div>
          <div className='row footer_row'>
            <div className='col-12'>
              <div className='footer_inner'>
                <div className={`footer_widget ${widgetInView1 ? 'animate' : ''}`} ref={widgetRef1}>
                  <img className='footer_logo' src={logo} alt="" />
                  <p>
                    When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
                  </p>
                  <ul className='footer_social'>
                    <li><a href=""> <FaFacebookF /> </a></li>
                    <li><a href=""><FaTwitter /> </a></li>
                    <li><a href=""> <FaInstagram /> </a></li>
                    <li><a href=""> <FaLinkedin /> </a></li>
                  </ul>
                </div>
                <div className={`footer_widget-2 ${widgetInView2 ? 'animate' : ''}`} ref={widgetRef2}>
                  <h2 className='footer_widget_title'>Information</h2>
                  <ul className='footer_link'>
                    <li><a href="">About Company</a></li>
                    <li><a href="">Case Study</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                  </ul>
                </div>
                <div className={`footer_widget-3 ${widgetInView3 ? 'animate' : ''}`} ref={widgetRef3}>
                  <h2 className='footer_widget_title'>Contact Us</h2>
                  <ul className='footer_contact'>
                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                    <li>
                      <a href="tel:02574328301" className='phone'>+02) 574 - 328 - 301 </a>
                    </li>
                    <li>
                      <a href="mailto:info@buildyexample.com">info@buildyexample.com</a>
                    </li>
                  </ul>
                </div>
                <div className={`footer_widget-4 ${widgetInView4 ? 'animate' : ''}`} ref={widgetRef4}>
                  <h2 className='project_title'>Have a project in your mind?</h2>
                  {/* <div className="btn_wrappers">
                    <a href="#" className="wc-btn-primary btn-hover btn-item">
                      Explore our service <GoArrowUpRight/>
                    </a>
                  </div> */}
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
                      Contact Us <GoArrowUpRight/>
              </a>
              </div>
                  
                  <h3 className='contact-time'>09 : 00 AM - 10 : 30 PM</h3>
                  <h4 className='contact-day'>Saturday - Thursday</h4>
                </div>
                <div className='footer_copyright'>
                  <p>
                    © 2022 - 2025 | All rights reserved by
                    <a href="#">Wealcoder</a>
                  </p>
                </div>
                <div className='footer__subscribe'>
                  <form action="#">
                    <input type="email" name="email" placeholder='Enter your email' />
                    <button className='subs-btn' type='submit'>
                      <FaRegPaperPlane />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
