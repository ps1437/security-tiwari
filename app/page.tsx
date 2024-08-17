import AboutUs from "@/components/AboutUs";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import SecurityServices from "@/components/SecurityServices";

export default function Home() {
  return (
    <div className="bg-yellow-500 text-white h-screen overflow-auto scrollbar-track-gray-400/20 scrollbar-thumb-secondary">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="securityServices">
          <SecurityServices />
        </section>

        <section id="feedback">
          <Feedback />
        </section>

        <section id="contacts">
          <Footer />
        </section>
      </main>
    </div>
  );
}
