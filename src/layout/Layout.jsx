import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MyRoutes from "../routes/MyRoutes";

const Layout = () => {
  return (
    <div>
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
};

export default Layout;
