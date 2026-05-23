import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeBuildFor from "@/components/WhoWeBuildFor";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeBuildFor />
        <Services />
        <Process />
        <Gallery />
        <WhyChooseUs />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
