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
      <Headroom className="z-[1000]">
        <Navbar />
      </Headroom>
      <Chatbot />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
