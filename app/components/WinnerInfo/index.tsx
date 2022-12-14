import { FC } from "react";
import toast from "react-hot-toast";
import styles from "./winnerInfo.module.scss";
import { useTWImports } from "../../hooks/useTWImports";
import { formatData } from "../../hooks/useFormatData";

const WinnerInfo: FC = () => {
  const { WithdrawWinnings, winnings } = useTWImports();

  const onWithDrawingFunction = async () => {
    const notification = toast.loading("Withdrawing winning...");

    try {
      const { data } = await WithdrawWinnings([{}]);

      toast.success("Winnings withdrawn successfully!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Whoops something went wrong", {
        id: notification,
      });
      console.log(err);
    }
  };

  return (
    <section className={styles.main}>
      <button onClick={onWithDrawingFunction} className={styles.btn}>
        <p className="font-semibold">Winner Winner Chicken Dinner!</p>
        <p className="mb-[20px]">Total winnings: {formatData(winnings)}</p>
        <p className="font-semibold">click here to withdraw</p>
      </button>
    </section>
  );
};

export default WinnerInfo;
