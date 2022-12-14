import { FC } from "react";
import styles from "./ticketCount.module.scss";

interface TicketCount {
  userTickets: number;
}

const TicketCount: FC<TicketCount> = ({ userTickets }) => {
  return (
    <section className="stats-сontainer text-white p-[20px] mt-[20px] flex flex-col">
      <p className="self-center text-center mb-[15px]">
        You have {userTickets} tickets
      </p>
      <ul className={`${styles.list} grid gap-[10px]`}>
        {Array(userTickets)
          .fill("")
          .map((_, index) => (
            <li className="py-[20px] px-[10px] flex-center-center rounded-[5px] bg-gradient-to-bl from-green-600 to-amber-500 text-amber-400">
              {index + 1}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default TicketCount;
