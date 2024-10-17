import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/main.scss";
import Navbar from "./components/Navbar";
import Maon from "./components/Maon";
import Sliderchange from "./components/Sliderchange";
import i18n from "./components/i18n";
import Ishjarayonioxirgi from "./components/WorkProcess";
import Comment from "./components/Comment";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projectsworkplace from "./components/Projectsworkplace";
import Servicetype from "./components/Servicetype";
import Whyus from "./components/Whyus";
import Howprocesswork from "./components/Howprocesswork";



export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div >
      <Navbar />
      <Maon />
      <Whyus />
      <Servicetype />
      <Sliderchange />
      <Projectsworkplace/>
      <Howprocesswork/>
      <Ishjarayonioxirgi/>
      <Comment/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}
