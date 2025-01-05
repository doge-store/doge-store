import { PiArrowUpRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function LinkButton({ text, link }: { text: string; link: string }) {
  return (
    <Link
      to={link}
      className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
    >
      {text}
      <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl">
        <PiArrowUpRightBold />
      </span>
    </Link>
  );
}

export default LinkButton;
