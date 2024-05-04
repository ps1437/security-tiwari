import AboutUs from "@/components/AboutUs";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import SecurityServices from "@/components/SecurityServices";

export default function Home() {
  return (
    <div
      className="bg-[rgb(119,119,125)] text-white h-screen snap-y snap-mandatory
        overflow-scroll overflow-x-hidden z-0 
        scrollbar-track-gray-400/20 scrollbar-thumb-secondary "
    >

<Navigation/>
      <section id="home" className="snap-proximity ">
        <Hero />
      </section>

      <section id="about" className="snap-proximity">
        <AboutUs />
      </section>
      <section id="securityServices" className="snap-proximity">
        <SecurityServices />
      </section>
      <section id="feedback" className="snap-proximity">
        <Feedback />
      </section>
      <section id="contacts" className="snap-proximity">
        <Footer />
      </section>
    </div>
  );
}
