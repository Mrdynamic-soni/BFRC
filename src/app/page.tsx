// import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GoogleRating from "@/components/GoogleRating";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

const Home = () => (
  <>
    <HeroSection />
    <ServicesSection />
    {/* <ClientsSection /> */}
    <GoogleRating />
    <ContactSection />
    <Footer />
  </>
);

export default Home;
