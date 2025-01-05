import CTASectiont from "../components/homepage/CTASectiont";
import Testimonial from "../components/homepage/Testimonial";
import DedicatedSupport from "../components/services/DedicatedSupport";
import DentistSection from "../components/services/DentistSection";
import SaveTimeMoneySection from "../components/services/SaveTimeMoneySection";
import WhyChooseUs from "../components/services/WhyChooseUs";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/breadcrumb_img_7.png";

function DentistServices() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Dentist Services "
        pageDesc="AccuPay is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals"
        pageTitle="Dentist Services "
      />
      <DentistSection />
      <SaveTimeMoneySection isImgRight={true} />
      <WhyChooseUs />
      <DedicatedSupport />
      <Testimonial />
      <CTASectiont />
    </main>
  );
}

export default DentistServices;
