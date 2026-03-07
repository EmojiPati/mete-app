import CompanyIntro from "@/components/CompanyIntro";
import CompanyProfile from "@/components/CompanyProfile";
import Contact from "@/components/Contact";
import DetailedServices from "@/components/DetailedServices";
import Footer from "@/components/Footer";
import HealthInfo from "@/components/HealthInfo";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ServicesOverview from "@/components/ServicesOverview";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CompanyIntro />
        <ServicesOverview />
        <DetailedServices />
        <HealthInfo />
        <CompanyProfile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
