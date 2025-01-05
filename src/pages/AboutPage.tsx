import AboutSection from "../components/aboutpage/AboutSection";
import AwardsSection from "../components/aboutpage/AwardsSection";
import OurValues from "../components/aboutpage/OurValues";
import StorySection from "../components/aboutpage/StorySection";
import CTASectiont from "../components/homepage/CTASectiont";
import ContactSection from "../components/homepage/ContactSection";
import CounterSection from "../components/homepage/CounterSection";
import PricingSection from "../components/homepage/PricingSection";
import Testimonial from "../components/homepage/Testimonial";
import WhyAccoupay from "../components/homepage/WhyAccoupay";

function AboutPage() {
  return (
    <main>
      <AboutSection />
      <StorySection />
      <OurValues />
      <AwardsSection />
      <CounterSection />
      <WhyAccoupay />
      <Testimonial />
      <PricingSection />
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default AboutPage;
