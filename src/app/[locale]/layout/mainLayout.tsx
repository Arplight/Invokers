import { ReactNode } from "react";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import TopButton from "@/components/top_button/topButton";
import WhatsappButton from "@/components/whatsapp_button/whatsappButton";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <TopButton />
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default MainLayout;
