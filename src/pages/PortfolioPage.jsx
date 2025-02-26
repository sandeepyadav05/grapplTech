import React from 'react';
import arrow from '../assets/Home/arrow.png';
import '../styles/portfolio.scss';
import portfolioImage from '../assets/porfolio/portfolio-img1.jpeg';
import UperFooter from '../components/UperFooter';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const renderPortfolioItems = (repeat, idxOffset) => {
    return Array.from({ length: repeat }).map((_, idx) => (
      <div className={`col-${repeat === 1 ? '12' : 'sm-6'}`} key={idx + idxOffset}>
        <div className="portfolio-img-container mb-5">
         <Link to="/portfoliodetails"> <img src={portfolioImage} alt="Portfolio" /></Link>
          <div className="d-flex lh-sm justify-content-between">
             <p className='text-light fw-light'><b>DESIGN</b>--CONCEPT</p>
            <p>BRANDING <br />-2019</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="m-0 pt-5 home-page-container">
      <div className="home-page-banners home-page-banner">
        <div className="row row1 p-5  pb-0 mb-0">
          <div className="col-lg-4 d-flex p-4" data-bs-theme="dark">
            <p className="p1">NO DOUBT</p>
            <hr />
            <p className="p2">SINCE 2020</p>
          </div>
          <div className="col-4" data-bs-theme="dark"></div>
        </div>

        <div className="row row2 p-5 pt-0 pb-0 mt-0 mb-0 text-white portfolio-page">
          <div className="col-md-10">
            <p className="text m-0 p-0 display-1 text-light fw-bold">Work</p>
            <div className="d-flex portfolio-second-row">
              <p className="p-3" >
                The projects we do are for startups who make bureaucracy easier, teach tech for in-demand, and many more.
              </p>
              <img src={arrow} alt="Arrow" />
            </div>
          </div>
        </div>

        {[2, 1, 2, 2, 2, 2, 1].map((repeat, idx) => (
          <div className="row text-white justify-content-between" key={idx}>
            {renderPortfolioItems(repeat, idx)}
          </div>
        ))}

        <div className="row text-center text-light">
          <div className="col-12 bold-font">
            <p style={{ fontSize: "150px", color: "white" }}>LET'S CONTACT LEGENDS</p>
          </div>
        </div>
      </div>
      <UperFooter />
    </div>
  );
};

export default PortfolioPage;
