import CTASectiont from "../components/homepage/CTASectiont";
import StepByStepGuide from "../components/homepage/StepByStepGuide";
import Testimonial from "../components/homepage/Testimonial";
import TaxationSection from "../components/services/TaxationSection";
import TaxationVideoSection from "../components/services/TaxationVideoSection";
import WhatWeDoTaxation from "../components/services/WhatWeDoTaxation";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/breadcrumb_img_4.png";
function TaxationServices() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Taxations Services"
        pageDesc="AccuPay takes the complexity out of taxes, offering a range of services to ensure your business stays compliant and maximizes."
        pageTitle="Taxations Services"
      />
      <TaxationSection />
      <WhatWeDoTaxation />
      <StepByStepGuide />
      <TaxationVideoSection />
      <Testimonial />
      <CTASectiont />
    </main>
  );
}

export default TaxationServices;
