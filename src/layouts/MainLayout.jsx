// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import SimpleSlider from "../utils/SimpleSlider";
import HeaderCarousel from "../utils/HeaderCarousel";
import Chatbot from "../chatbot/Chatbot";
import Headroom from "react-headroom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Headroom>
        <Navbar />
      </Headroom>
      <hr className="mb-2" />
      <Chatbot />
      {/* <SimpleSlider/> */}
      {/* <HeaderCarousel/> */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
