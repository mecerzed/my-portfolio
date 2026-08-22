import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";

export default function Home() {
    return (
        <main>
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
