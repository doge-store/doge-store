import CTASectiont from "../components/homepage/CTASectiont";
import Testimonial from "../components/homepage/Testimonial";
import RealStateSection from "../components/services/RealStateSection";
import SaveTimeMoneySection from "../components/services/SaveTimeMoneySection";
import SearvicesFeaturesSection from "../components/services/SearvicesFeaturesSection";
import UnlimitedPayrolls from "../components/services/UnlimitedPayrolls";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/breadcrumb_img_5.png";
function RealStateServices() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Real Estate Services"
        pageDesc="AccuPay's Real Estate Services are designed to simplify the complexities of real estate transactions, investments, and property management."
        pageTitle="Real-estate Services"
      />

      <RealStateSection />
      <SearvicesFeaturesSection />
      <UnlimitedPayrolls />
      <SaveTimeMoneySection />
      <Testimonial />
      <CTASectiont />
    </main>
  );
}

export default RealStateServices;
