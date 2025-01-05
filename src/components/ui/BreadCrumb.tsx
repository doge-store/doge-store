import { PiCaretRight, PiHouseSimpleLight } from "react-icons/pi";

function BreadCrumb({ pageName }: { pageName: string }) {
  return (
    <>
      <ul className="flex justify-start items-center gap-1 ">
        <li className="flex justify-start items-center gap-1">
          <PiHouseSimpleLight /> Home
        </li>
        <li className="flex justify-start items-center gap-1">
          <PiCaretRight /> {pageName}
        </li>
      </ul>
    </>
  );
}

export default BreadCrumb;
