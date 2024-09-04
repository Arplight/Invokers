import { ReactNode } from "react";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import TopButton from "@/components/top_button/topButton";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <TopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
