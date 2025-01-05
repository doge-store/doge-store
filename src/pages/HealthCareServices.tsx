import CTASectiont from "../components/homepage/CTASectiont";
import Testimonial from "../components/homepage/Testimonial";
import HealthCareSection from "../components/services/HealthCareSection";
import ManageHealthSection from "../components/services/ManageHealthSection";
import SaveTimeMoneySection from "../components/services/SaveTimeMoneySection";
import SearvicesFeaturesSection from "../components/services/SearvicesFeaturesSection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/breadcrumb_img_6.png";

function HealthCareServices() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Healthcare Services"
        pageDesc="AccuPay's Healthcare Services are designed to support the financial health of your medical practice or healthcare facility"
        pageTitle="Healthcare Services"
      />

      <HealthCareSection />
      <SearvicesFeaturesSection />
      <ManageHealthSection />
      <SaveTimeMoneySection />
      <Testimonial />
      <CTASectiont />
    </main>
  );
}

export default HealthCareServices;
