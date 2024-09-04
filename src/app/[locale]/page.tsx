import MainLayout from "./layout/mainLayout";
import Intro from "./sections/intro/intro";
import About from "./sections/about/about";
import Services from "./sections/services/services";
import Advantages from "./sections/advantages/advantages";
import Portfolio from "./sections/portfolio/portfolio";
import Testimonials from "./sections/testimonials/testimonials";
import ContactForm from "./sections/contact_form/contactForm";

export default function Home() {
  return (
    <MainLayout>
      <Intro />
      <About />
      <Services />
      <Advantages />
      <Portfolio />
      <Testimonials />
      <ContactForm />
    </MainLayout>
  );
}
