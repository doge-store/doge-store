function DropDownModal({
  showModal,
  setShowModal,
  setItem,
  items,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  items: string[];
}) {
  return (
    <ul
      className={`absolute top-[90px]  left-0 bg-s2 py-4 w-full ${
        showModal
          ? "visible opacity-100 translate-y-0 scale-100"
          : "invisible opacity-0 translate-y-4 scale-75"
      } duration-500 max-h-[250px] overflow-y-auto overflow-x-hidden`}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          onClick={() => {
            setItem(item);
            setShowModal(false);
          }}
          className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer "
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DropDownModal;
