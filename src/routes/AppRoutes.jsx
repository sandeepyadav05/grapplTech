// all routing parts are here

// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConstant } from "./AppRoutesConstants";
import Navbar from "../pages/authentication/Navbar";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from '../pages/ContactPage'
import Footer from '../components/Footer'
import SideNavbar from "../pages/authentication/SideNavbar";
import PortfolioDetails from "../pages/PortfolioDetails";
export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <SideNavbar/>
        <Routes>
          <Route path={routesConstant.homepage.path} element={<HomePage/>} />
          <Route path={routesConstant.about.path} element={<AboutPage/>} />
          <Route path={routesConstant.service.path} element={<ServicePage/>} />
          <Route path={routesConstant.portfolio.path} element={<PortfolioPage/>} />
          <Route path={routesConstant.portfoliodetails.path} element={<PortfolioDetails/>} />
          <Route path={routesConstant.contact.path} element={<ContactPage/>} />
        </Routes> 
        
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
