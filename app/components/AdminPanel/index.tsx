import Item from "./Item";
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowUturnDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

import styles from "./adminPanel.module.scss";

import { useTWImports } from "../../hooks/useTWImports";
import { FC } from "react";
import { formatData } from "../../hooks/useFormatData";
import { adminAction, toastTexts } from "../../../utils/adminAction";

const AdminPanel: FC = () => {
  const {
    DrawWinnerTicket,
    restartDraw,
    WithdrawCommission,
    RefundAll,
    totalCommission,
  } = useTWImports();

  return (
    <section className=" mt-[30px] p-[20px] md:max-w-[600px] w-full text-white bg-bgColor2 border-borderStat border rounded-[10px] p flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-[5px]">Админ панель</h2>
      <p className="text-sm mb-[20px] text-center">
        Общая комиссия: {formatData(totalCommission)}
      </p>
      <ul
        className={`${styles.list} grid md:grid-cols-4 w-full gap-y-[10px] grid-cols-1 gap-x-[10px]`}
      >
        <Item
          onClick={() =>
            adminAction(
              DrawWinnerTicket,
              toastTexts.loading.drawWinner,
              toastTexts.success.drawWinner
            )
          }
          icon={<StarIcon />}
          text="Выбрать победителя"
        />
        <Item
          onClick={() =>
            adminAction(
              WithdrawCommission,
              toastTexts.loading.onWithDrawComission,
              toastTexts.success.onWithDrawComission
            )
          }
          icon={<CurrencyDollarIcon />}
          text="Отозвать комиссию"
        />
        <Item
          icon={<ArrowPathIcon />}
          onClick={() =>
            adminAction(
              restartDraw,
              toastTexts.loading.onRestartDraw,
              toastTexts.success.onRestartDraw
            )
          }
          text="Перезапустить розыгрыш"
        />
        <Item
          onClick={() =>
            adminAction(
              RefundAll,
              toastTexts.loading.RefundAll,
              toastTexts.success.RefundAll
            )
          }
          icon={<ArrowUturnDownIcon />}
          text="Вернуть средства"
        />
      </ul>
    </section>
  );
};

export default AdminPanel;
