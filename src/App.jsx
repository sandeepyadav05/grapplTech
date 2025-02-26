// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import './App.scss'
import AnimCurser from "./pages/authentication/AnimCurser";
import Scrolup from "./pages/authentication/Scrolup";
import SelfIntro from "./pages/SelfIntro";
// import Home from "./pages/authentication/Home";
// import VerticalSwiper from "./pages/authentication/VerticalSwiper";

function App() {
  
  return (
    <div className="App">
    
      <AnimCurser/>
      
      <AppRoutes>
      </AppRoutes>
      <Scrolup/>
      {/* <SelfIntro/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
