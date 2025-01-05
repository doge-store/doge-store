import { servicesFeatures } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function SearvicesFeaturesSection() {
  return (
    <section className=" bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        {servicesFeatures.map(({ id, title, desc, icon }, idx) => (
          <div className="col-span-12 md:col-span-4" key={id}>
            <StaggerEffect id={idx}>
              <div
                key={id}
                className=" flex justify-start items-center flex-col"
              >
                <div className="text-5xl text-s1">{icon}</div>
                <h4 className="heading-4 pt-6 pb-3 text-center">{title}</h4>
                <p className="text-center lg:px-4 xxl:px-8">{desc}</p>
              </div>
            </StaggerEffect>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearvicesFeaturesSection;
