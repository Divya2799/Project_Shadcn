// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import SimpleSlider from "../utils/SimpleSlider";
import HeaderCarousel from "../utils/HeaderCarousel";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <hr className="mb-2" />

      {/* <SimpleSlider/> */}
      <HeaderCarousel/>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
