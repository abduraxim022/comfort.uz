import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/main.scss";
import Navbar from "./components/Navbar";
import Maon from "./components/Maon";
import Negabiz from "./components/Negabiz";
import Xizmatturlari from "./components/Xizmatturlari";
import Sliderchange from "./components/Sliderchange";
import Ishjarayoni from "./components/Ishjarayoni";
import Qandayishlayd from "./components/Qandayishlayd";
import i18n from "./components/i18n";
import Ishjarayonioxirgi from "./components/Ishjarayonioxirgi";
import Comment from "./components/Comment";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="padding-left">
      <Navbar />
      <Maon />
      <Negabiz />
      <Xizmatturlari />
      <Sliderchange />
      <Ishjarayoni />
      <Qandayishlayd/>
      <Ishjarayonioxirgi/>
      <Comment/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}
