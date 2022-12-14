import { FC } from "react";
import toast from "react-hot-toast";
import styles from "./winnerInfo.module.scss";
import { useTWImports } from "../../hooks/useTWImports";
import { formatData } from "../../hooks/useFormatData";

const WinnerInfo: FC = () => {
  const { WithdrawWinnings, winnings } = useTWImports();

  const onWithDrawingFunction = async () => {
    const notification = toast.loading("Вывод выигрыша...");

    try {
      const { data } = await WithdrawWinnings([{}]);

      toast.success("Урааа, выигрыш у Вас в кошельке!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Уппсс, что-то пошло не так :(", {
        id: notification,
      });
      console.log(err);
    }
  };

  return (
    <section className={styles.main}>
      <button onClick={onWithDrawingFunction} className={styles.btn}>
        <p className="font-semibold">Winner Winner Chicken Dinner!</p>
        <p className="mb-[20px]">Общая сумма: {formatData(winnings)}</p>
        <p className="font-semibold">жми и забирай свой выигрыш</p>
      </button>
    </section>
  );
};

export default WinnerInfo;
