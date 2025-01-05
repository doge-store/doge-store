import CTASectiont from "../components/homepage/CTASectiont";
import ContactSection from "../components/homepage/ContactSection";
import CounterSection from "../components/homepage/CounterSection";
import StepByStepGuide from "../components/homepage/StepByStepGuide";
import WhyAccoupay from "../components/homepage/WhyAccoupay";
import WeHelpSection from "../components/services/WeHelpSection";
import WhatWeDo from "../components/services/WhatWeDo";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/breadcrumb_img_2.png";

function PayrollProcessing() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Payroll Processing"
        pageDesc="Welcome to AccuPay, your trusted partner for comprehensive financial solutions. Explore our range of services tailored to meet your business needs."
        pageTitle="Payroll Processing"
      />
      <WeHelpSection />
      <WhatWeDo />
      <StepByStepGuide />
      <CounterSection />
      <WhyAccoupay />
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default PayrollProcessing;
