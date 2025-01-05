import CTASectiont from "../components/homepage/CTASectiont";
import FaqSection from "../components/homepage/FaqSection";
import StepByStepGuide from "../components/homepage/StepByStepGuide";
import AccountSection from "../components/services/AccountSection";
import AccountingServicesSection from "../components/services/AccountingServices";
import NerverWorrySection from "../components/services/NerverWorrySection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/breadcrumb_img_3.png";

function AccountingServices() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Accounting Services"
        pageDesc="Discover comprehensive accounting services tailored to your business needs. From bookkeeping to financial reporting,"
        pageTitle="Accounting Services"
      />
      <AccountingServicesSection />
      <NerverWorrySection />
      <StepByStepGuide />
      <AccountSection />
      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default AccountingServices;
