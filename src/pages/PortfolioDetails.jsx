import React from 'react'
import '../styles/portfolioDetails.scss'
import bigimage from '../assets/PortfolioDetails/1.jpg'
import image2 from '../assets/PortfolioDetails/2.jpg'
import image3 from '../assets/PortfolioDetails/3.jpg'
import image4 from '../assets/PortfolioDetails/4.jpg'
import image5 from '../assets/PortfolioDetails/5.jpg'
import image6 from '../assets/PortfolioDetails/6.jpg'
import image7 from '../assets/PortfolioDetails/7.jpg'
import shape from '../assets/PortfolioDetails/shape.png'
function PortfolioDetails() {
  return (
    <div>
      <section className="portfolio__detail">
        <div className="portfolio__detail-top">
          <div className="container g-0 line pt-110 pb-130">
            <span className="line-3"></span>

            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                <div className="sec-title-wrapper">
                  <h2 className="sec-titles  animation__char_come">
                    <div className="animated-text ">Lionpro-</div>
                    <br />
                    <div className="animated-text">Agency</div>
                  </h2>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div className="portfolio__detail-info">
                  <ul>
                    <li>Category <a href="category.html">Development</a></li>
                    <li>Client <span>Webflow</span></li>
                    <li>Start Date <span>23 January 2021</span></li>
                    <li>Handover <span>05 March 2021</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__detail-thumb">
          <img src={bigimage} alt="Portfolio Thumbnail" data-speed="auto" data-lag="0" />
        </div>

        <div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>

            <div className="block-content">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    <div className="animated-text">Build, streamline and </div>
                    <div className="animated-text">evolve together with </div>
                    <div className="animated-text">solution</div>
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>
                      Always ready to push the boundaries, especially when it comes to our own platform, Our
                      analytical eye to create a site that was visually engaging and also optimised for maximum performance. It
                      also perfectly reflects the journey to help it tell a story to increase its understanding and drive
                      action. To create a site that was visually engaging for maximum performance.
                    </p>

                    <ul>
                      <li>+ Brand Development</li>
                      <li>+ UX/UI Design</li>
                      <li>+ Front-end Development</li>
                      <li>+ Copywriting</li>
                      <li>+ Shopify Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-thumb">
              <img src={image2} alt="Portfolio Image" data-speed="0.5" data-lag="0" />
            </div>

            <div className="block-content pt-140">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    <div className="animated-text">Visual and typography </div>
                    <div className="animated-text">hierarchy</div>
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>
                      Visual hierarchy is the principle of arranging elements to show their order of importance.
                      Designers structure visual characteristics—e.g., menu icons—so users can understand information easily.
                      By laying out elements logically and strategically, designers influence users’ perceptions and
                      guide them to desired actions. Users notice larger elements more easily can convert.
                    </p>

                    <div className="fonts">
                      <img src={shape} alt="Font Style" />
                      <ul>
                        <li className="regular"><span>regular</span> This is text message</li>
                        <li className="medium"><span>Medium</span> Medium typography</li>
                        <li className="semibold"><span>SemiBold</span> Just Amazing</li>
                        <li className="bold"><span>Bold</span> Awesome</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-gallery">
              <img src={image3} alt="Portfolio Image" />
              <img src={image4} alt="Portfolio Image" />
            </div>

            <div className="block-thumb">
              <img src={image5} alt="Portfolio Image" data-speed="0.5" data-lag="0" />
            </div>

            <div className="block-img-text">
              <img src={image6} alt="Portfolio Image" />
              <img src={image7} alt="Portfolio Image" />
              <p>
                For those of us who are blessed with good sight. So we seldom consider
                it. That’s why going off to investigate the whys and hows involved is a little like trying to get behind the wind
              </p>
            </div>

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__detail-btns pt-150 pb-150">
                  <a href="portfolio-details.html" className="wc-btn-primary btn-hover"><span></span> Prev Work</a>
                  <a href="portfolio-details.html" className="wc-btn-primary btn-hover"><span></span> Next Work</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default PortfolioDetails
