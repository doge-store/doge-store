import BlogSection from "../components/homepage/BlogSection";
import CTASectiont from "../components/homepage/CTASectiont";
import CompanySlider from "../components/homepage/CompanySlider";
import ContactSection from "../components/homepage/ContactSection";
import ContactUsSection from "../components/homepage/ContactUsSection";
import CounterSection from "../components/homepage/CounterSection";
import Features from "../components/homepage/Features";
import Hero from "../components/homepage/Hero";
import Integrations from "../components/homepage/Integrations";
import PricingSection from "../components/homepage/PricingSection";
import SolutionsSection from "../components/homepage/SolutionsSection";
import StepByStepGuide from "../components/homepage/StepByStepGuide";
import Testimonial from "../components/homepage/Testimonial";
import WhyAccoupay from "../components/homepage/WhyAccoupay";

function HomePage() {
  return (
    <main>
      <Hero />
      <CompanySlider />
      <SolutionsSection />
      <Features />
      <CounterSection />
      <StepByStepGuide />
      <WhyAccoupay />
      <Integrations />
      <ContactUsSection />
      <Testimonial />
      <PricingSection />
      <BlogSection />
      <ContactSection />
      <CTASectiont />
    </main>
  );
}

export default HomePage;
