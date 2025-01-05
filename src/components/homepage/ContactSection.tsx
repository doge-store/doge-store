import { Link } from "react-router-dom";
import { contactCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import SectionHeadingCenter from "../global/SectionHeadingCenter";

function ContactSection({ isPaddingTop }: { isPaddingTop?: boolean }) {
  return (
    <section className={`sbp-30 ${isPaddingTop ? "stp-30" : ""}`}>
      <div className="container">
        <SectionHeadingCenter
          sectionName="Contact"
          sectionTitle="Questions? Meet Ansawer"
          sectionDesc="Startups thrive with AccuPay. Their flexible payroll solutions have been instrumental in our journey, providing the support"
        />
        <div className="grid grid-cols-12 gap-6 stp-15">
          {contactCard.map(({ id, icon, title, desc, linkText }, idx) => (
            <div
              key={id}
              className="col-span-12 min-[450px]:col-span-6 md:col-span-3 "
            >
              <StaggerEffect id={idx}>
                <div className="flex justify-center items-center flex-col">
                  <div className="text-7xl text-s1">{icon}</div>
                  <h4 className="heading-4 pb-4 pt-3">{title}</h4>
                  <p className="pb-5 text-center">{desc}</p>
                  <Link
                    to={"/contact"}
                    className="text-s1 underline font-medium"
                  >
                    {linkText}
                  </Link>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
