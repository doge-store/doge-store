import FadeDown from "../animation/FadeDown";
import FadeLeft from "../animation/FadeLeft";
import FadeTop from "../animation/FadeTop";

type Props = {
  sectionName: string;
  sectionTitle: string;
  sectionDesc: string;
};

function SectionHeadingCenter({
  sectionName,
  sectionTitle,
  sectionDesc,
}: Props) {
  return (
    <div className="flex justify-center items-center max-xxl:overflow-hidden">
      <div className="  max-w-[700px] text-center flex justify-center items-center flex-col">
        <FadeDown>
          <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white ">
            {sectionName}
          </p>
        </FadeDown>
        <FadeLeft>
          <h1 className="display-4  pt-4 pb-4 lg:pb-6">{sectionTitle}</h1>
        </FadeLeft>
        <FadeTop>
          <p className="text-bodyText">{sectionDesc}</p>
        </FadeTop>
      </div>
    </div>
  );
}

export default SectionHeadingCenter;
