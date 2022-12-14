import { FC } from "react";

interface ItemProps {
  text: string;
  onClick: () => void;
  icon: JSX.Element;
}

const Item: FC<ItemProps> = ({ text, onClick, icon }) => {
  return (
    <li className="cursor-pointer rounded-[5px] bg-bgColor border-borderStat border flex-center-center py-[25px] px-[10px] text-sm hover:bg-borderStat">
      <button
        onClick={onClick}
        className="h-full w-full flex-col-i-center gap-y-[5px]"
      >
        {icon}
        <span className="text-center">{text}</span>
      </button>
    </li>
  );
};

export default Item;
