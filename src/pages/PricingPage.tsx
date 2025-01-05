import CTASectiont from "../components/homepage/CTASectiont";
import PricingSection from "../components/homepage/PricingSection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/breadcrumb_img_20.png";

function PricingPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Pricing"
        pageDesc="Discover transparent and competitive pricing for our Accounting & Payroll Processing Services. Tailored solutions to fit your business needs,"
        pageTitle="Pricing"
      />

      <PricingSection isBgWhite={true} />
      <CTASectiont />
    </main>
  );
}

export default PricingPage;
