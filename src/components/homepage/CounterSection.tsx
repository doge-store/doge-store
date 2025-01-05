import NumberCounter from "../ui/NumberCounter";

function CounterSection() {
  return (
    <section className=" bg-[url(/images/counter_bg.png)] bg-cover stp-30 sbp-30 relative ">
      <div className="container text-white flex justify-between items-center gap-8 sm:gap-4 md:gap-8 lg:gap-16 max-sm:flex-col">
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={1} end={63} /> Hrs
          </p>
          <p>
            Average time saved per month running payroll and HR after switching
            to Accupay.
          </p>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            £ <NumberCounter start={10000} end={14880} />{" "}
          </p>
          <p>
            Average savings made per year running payroll and HR after switching
            to Accupay.
          </p>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={1} end={8} /> Weeks
          </p>
          <p>average time it takes to switch to Accupay - and often less</p>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
