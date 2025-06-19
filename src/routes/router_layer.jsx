import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AppDevelopment from "../pages/services/AppDevelopment";
import DigitalMarketing from "../pages/services/DigitalMarketing";
import SaasProducts from "../pages/services/SaasProducts";
import SalesAndServices from "../pages/services/SalesAndServices";
import WebDevelopment from "../pages/services/WebDevelopment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "services",
        children: [
          { path: "web-development", element: <WebDevelopment /> },
          { path: "app-development", element: <AppDevelopment /> },
          { path: "digital-marketing", element: <DigitalMarketing /> },
          { path: "sales-and-services", element: <SalesAndServices /> },
          { path: "saas-products", element: <SaasProducts /> },
        ],
      },
    ],
  },
]);

export default router;