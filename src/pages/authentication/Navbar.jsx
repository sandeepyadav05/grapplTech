// import React, { useState } from "react";
// import "../../styles/home.scss";
// import vector from "../../assets/Home/Vector1.svg";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div>
//       <nav
//         name="navigation"
//         className="navbar navbar-expand-lg bg-body-tertiary heading  m-0 p-0"
//         data-bs-theme="dark"
//       >
//         <div className="container-fluid nav-color">
//           <a className="navbar-brand justify-content-center" href="#">
//             {/* <img src={Sock} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"> */}
//             Amour
//           </a>

//           <div className="nav navbar " id="navbarTogglerDemo02">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0t {`nav-links ${isOpen ? 'open' : ''}`}">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-light"
//                   aria-current="page"
//                   to="/"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link text-light">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/intropage" className="nav-link text-light">
//                   Intropage
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/service" className="nav-link text-light">
//                   Service
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/portfolio" className="nav-link text-light">
//                   Portfolio
//                 </Link>
//               </li>

//               <button
//                 type="button"
//                 className="btn btn-light text-dark"
//                 onclick="darkModeFunction()"
//               >
//                 <Link to="/contact" className="text-decoration-none text-dark">
//                   {" "}
//                   Contact <img src={vector} alt="" width="15px" className="" />
//                 </Link>
//               </button>
//             </ul>
//             <div className="menu-icon" onClick={toggleMenu}>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import vector from "../../assets/Home/Vector1.svg";
import logo from "../../assets/Nav/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="pt-2">
          {" "}
          <Link aria-current="page" to="/" >
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link text-light">
            About
          </Link>
        </li>
        
        <li>
          <Link to="/service" className="nav-link text-light">
            Service
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link text-light">
            Portfolio
          </Link>
        </li>
        <button
          type="button"
          className="btn btn-light text-dark "
          onclick="darkModeFunction()"
          
        >
          <Link to="/contact" className="text-decoration-none text-dark  ">
            {" "}
            Contact <img src={vector} alt="" width="10px" height="20px"  />
          </Link>
        </button>
        {/* {isOpen && <li className="extra-element"><a href="#extra">Extra Element</a></li>} */}
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
