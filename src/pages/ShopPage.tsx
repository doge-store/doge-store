import { PiArrowRight } from "react-icons/pi";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import ProductCard from "../components/ui/ProductCard";
import { shopPage } from "../data/data";
import breadcrumpIllus from "/images/breadcrumb_img_13.png";

function ShopPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Shop"
        pageDesc="Explore our range of products and services designed to elevate your accounting and payroll experience. From essential tools to informative resources,"
        pageTitle="Welcome to Our Shop"
      />

      <section className="grid grid-cols-12 gap-6 container stp-30 sbp-30">
        {shopPage.map(({ price, ...props }, idx) => (
          <ProductCard key={idx} {...props} idx={idx} price={Number(price)} />
        ))}

        <div className="pt-6 flex justify-center items-center  col-span-12">
          <ul className="flex justify-center items-center gap-2">
            <li className="text-lg font-medium text-white border border-p1 bg-p1 w-[45px] h-[50px] flex justify-center items-center">
              1
            </li>
            <li className="text-lg font-medium  border border-strokeColor  w-[45px] h-[50px] flex justify-center items-center hover:bg-p1 hover:text-white hover:border-p1 duration-500">
              2
            </li>
            <li className="text-lg font-medium  border border-strokeColor  w-[45px] h-[50px] flex justify-center items-center">
              <PiArrowRight />
            </li>
          </ul>
        </div>
      </section>

      <CTASectiont />
    </main>
  );
}

export default ShopPage;
