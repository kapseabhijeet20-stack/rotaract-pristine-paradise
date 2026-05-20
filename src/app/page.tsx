import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Events from "@/components/Events";
import Awards from "@/components/Awards";
import Join from "@/components/Join";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Team />
      <SectionDivider />
      <Events />
      <SectionDivider />
      <Awards />
      <SectionDivider />
      <Join />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
