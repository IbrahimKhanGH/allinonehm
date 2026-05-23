import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeBuildFor from "@/components/WhoWeBuildFor";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

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
        <Contact />
        <ServiceArea />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
