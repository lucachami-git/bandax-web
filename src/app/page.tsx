import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Advantages from "@/components/Advantages";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Advantages />
        <AboutUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
