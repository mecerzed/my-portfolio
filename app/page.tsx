import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedWork />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}