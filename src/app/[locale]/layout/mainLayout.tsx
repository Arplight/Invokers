import { ReactNode } from "react";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
