import styles from "./nextDraw.module.scss";
import { formatData } from "../../hooks/useFormatData";
import CountdownTimer from "../CountdownTimer";
import { FC } from "react";
import { useTWImports } from "../../hooks/useTWImports";

const NextDraw: FC = () => {
  const { RemainingTickets, CurrentWinningReward } = useTWImports();

  return (
    <div className={`${styles.main} stats-сontainer`}>
      <div className={styles.titleBlock}>
        <h1>The Next Draw</h1>
      </div>
      <div className={styles.statBlock}>
        <div className={`${styles.statItem} stats bg-bgColor2`}>
          <h2>Total Pool</h2>
          <p>{formatData(CurrentWinningReward)}</p>
        </div>
        <div className={`${styles.statItem} stats bg-bgColor2`}>
          <h2>Tickets Remaining</h2>
          <p>{RemainingTickets?.toNumber()}</p>
        </div>
      </div>
      <CountdownTimer />
    </div>
  );
};

export default NextDraw;

{
}
