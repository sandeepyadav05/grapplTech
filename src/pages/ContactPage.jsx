import React from "react";
import "../styles/contact.scss";
import vactor from "../assets/Home/Vector1.svg";
import serviceImage from "../assets/ServicePage/demo-branding-agency-services-title-bg.jpg";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

import { RiMessage2Line } from "react-icons/ri";

const ContactPage = () => {
  const locations = [
    {
      city: "London",
      address: "301 Sondanella, Eden walk, Orchard view, London, UK",
      email: "info@yourdomain.com",
      phone: "123 456 7890",
      mapLink:
        "https://maps.google.com/maps?ll=-37.805688,144.962312&z=17&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449",
    },
    {
      city: "New York",
      address: "27 Eden walk eden centre, Orchard view, New York, USA",
      email: "info@yourdomain.com",
      phone: "123 456 7890",
      mapLink:
        "https://maps.google.com/maps?ll=-37.805688,144.962312&z=17&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449",
    },
    {
      city: "Dubai",
      address: "701 Sondanella, 24th Floor, Valley road, Dubai, Emirates",
      email: "info@yourdomain.com",
      phone: "123 456 7890",
      mapLink:
        "https://maps.google.com/maps?ll=-37.805688,144.962312&z=17&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449",
    },
    // Add more locations if needed
  ];
  return (
    <div>
      <section className="pt-5 top-space-margin position-relative overflow-hidden">
        <div className=" pt-4  position-relative">
          <div className="row g-0">
            <div className="col-xl-4 col-lg-5 d-flex text-light justify-content-center align-items-center ps-10 xxl-ps-6 xl-ps-4 md-ps-4 sm-ps-0 position-relative order-2 order-lg-1 appear anime-child anime-complete">
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
                    style={{ "--word-total": 2, "--char-total": 9 }}
                  >
                    <span
                      className="word"
                      data-word="contact"
                      style={{ "--word-index": 0 }}
                    >
                      <span
                        className="char"
                        data-char="c"
                        style={{
                          "--char-index": 0,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        c
                      </span>
                      <span
                        className="char"
                        data-char="o"
                        style={{
                          "--char-index": 1,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        o
                      </span>
                      <span
                        className="char"
                        data-char="n"
                        style={{
                          "--char-index": 2,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        n
                      </span>
                      <span
                        className="char"
                        data-char="t"
                        style={{
                          "--char-index": 3,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        t
                      </span>
                      <span
                        className="char"
                        data-char="a"
                        style={{
                          "--char-index": 4,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        a
                      </span>
                      <span
                        className="char"
                        data-char="c"
                        style={{
                          "--char-index": 5,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        c
                      </span>
                      <span
                        className="char"
                        data-char="t"
                        style={{
                          "--char-index": 6,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        t
                      </span>
                    </span>
                    <span className="whitespace"> </span>
                    <span
                      className="word"
                      data-word="us"
                      style={{ "--word-index": 1 }}
                    >
                      <span
                        className="char"
                        data-char="u"
                        style={{
                          "--char-index": 7,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        u
                      </span>
                      <span
                        className="char"
                        data-char="s"
                        style={{
                          "--char-index": 8,
                          opacity: 1,
                          transform: "translateY(0px)",
                          filter: "blur(0px)",
                        }}
                      >
                        s
                      </span>
                    </span>
                  </span>
                </h1>
              </div>
              <div
                className="border-start border-dark-gray  position-relative "
                style={{ paddingLeft: "40px", zIndex: "9" }}
              >
                <h2
                  className="z-3 fw-medium"
                  style={{
                    marginRight: "-10vw",
                    fontSize: "3.438rem",
                    lineHeight: "3.438rem",
                  }}
                >
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
                  style={{ position: "relative" }}
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

      <section className="contact-section">
        <div className="container mt-5">
          <div className="row appear anime-child anime-complete">
            {locations.map((location, index) => (
              <div className="col-md-4   sm-mb-30px" key={index}>
                <span className="fs-30 alt-font ls-minus-05px  text-light ">
                  {location.city}
                </span>
                <p className="PText">{location.address}</p>
                <div className="borderLine"></div>
                <div className="d-flex  ">
                  <span className="text-light fw-medium"> E: &nbsp;</span>
                  <a href={`mailto:${location.email}`} className="ancartag">
                    {" "}
                    {location.email}
                  </a>
                </div>
                <div className="d-flex mb-5px">
                  <span className="text-light fw-medium ">T: &nbsp;</span>
                  <a href={`tel:${location.phone}`} className="ancartag">
                    {" "}
                    {location.phone}
                  </a>
                </div>
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-decoration-none lh-lg text-light"
                >
                  <CiLocationOn /> View on google map
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-0 mb-5 mt-5">
        <div className=" p-0">
          <div className=" row gx-5">
            {/* <div
              className="col-xl-6 col-lg-7 cover-background backgroudImage "
            >
              <div className="countingBox">
                   <h1>350+</h1>
                <span className="fw-5 ml-3 lineHeight  lh-sm ">
                  Very satisfied clients around the worldwide.
                </span>
              </div>
            </div> */}
            <div
              className="col-xl-6 col-lg-7 cover-background md-h-500px sm-h-400px md-mb-50px"
              style={{backgroundaImage:"url('images/demo-branding-agency-contact-01.jpg')"}}
            >
              <div className="position-absolute countingbox   counter-style-04 ">
                <h2
                  className="vertical-counter numbers"
                  data-text="+"
                  data-to="353"
                  style={{height: "55px"}}
                >
                  <span className="vertical-counter-number" data-to="3">
                    <ul >
                      3
                    </ul>
                  </span>
                  <span className="vertical-counter-number" data-to="5">
                    <ul >
                     5
                    </ul>
                  </span>
                  <span className="vertical-counter-number" data-to="3">
                    <ul >
                     3
                    </ul>
                  </span>
                </h2>
                <span className="countingtext">
                  Very satisfied clients around the worldwide.
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-xl-5 col-lg-5 position-relative">
              <div
                className="contact-form-style-03 position-relative ps-15 pe-15 xxl-ps-10 xxl-pe-10 lg-ps-5 lg-pe-5 overflow-hidden last-paragraph-no-margin appear anime-child anime-complete"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <div className="formText d-flex">
                  <span className="textline"></span>
                  <span className=" text-uppercase  span ">
                    Get in touch with us
                  </span>
                </div>
                <h2 className="fw-mediums  text-light">
                  We'd love to hear from you!
                </h2>
                <form action="email-templates/contact-form.php" method="post">
                  <div className="position-relative  mb-4">
                    <span className="form-icon text-light">
                      <IoPersonOutline />
                    </span>
                    <input
                      className="inputbox"
                      type="text"
                      name="name"
                      placeholder="Your name*"
                    />
                  </div>
                  <div className="position-relative mb-4">
                    <span className="form-icon text-light">
                      <TfiEmail />
                    </span>
                    <input
                      className="inputbox"
                      type="email"
                      name="email"
                      placeholder="Your email address*"
                    />
                  </div>
                  <div className="position-relative mb-4">
                    <textarea
                      className="inputbox"
                      name="comment"
                      placeholder="Your message"
                      rows="3"
                    ></textarea>
                    <span className="form-icon text-light">
                      <RiMessage2Line />
                    </span>
                    <input type="hidden" name="redirect" value="" />
                    <button className="submitButton w-100" type="submit">
                      <TfiEmail /> Send message
                    </button>
                    <p
                      className="w-100 lh-base fs-6 mt-4"
                      style={{ color: "#999" }}
                    >
                      We are committed to protecting your privacy. We will never
                      collect information about you without your explicit
                      consent.
                    </p>
                    <div className="form-results mt-20px d-none"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
