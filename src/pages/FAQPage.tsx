import CTASectiont from "../components/homepage/CTASectiont";
import FaqSection from "../components/homepage/FaqSection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/breadcrumb_img_19.png";
function FAQPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="FAQ"
        pageDesc="Discover seamless accounting and payroll processing services tailored to your business needs. Our expert team ensures accuracy,"
        pageTitle="FAQ"
      />

      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default FAQPage;
