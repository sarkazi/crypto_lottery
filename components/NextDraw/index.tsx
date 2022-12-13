import styles from "./nextDraw.module.scss";
import { formatData } from "../../utils/formatData";
import CountdownTimer from "../CountdownTimer";

const NextDraw = ({ remainingTickets, currentWinningReward }) => {
  return (
    <div className={`${styles.main} stats-сontainer`}>
      <div className={styles.titleBlock}>
        <h1>The Next Draw</h1>
      </div>
      <div className={styles.statBlock}>
        <div className={`${styles.statItem} stats`}>
          <h2>Total Pool</h2>
          <p>{formatData(currentWinningReward)}</p>
        </div>
        <div className={`${styles.statItem} stats`}>
          <h2>Tickets Remaining</h2>
          <p>{remainingTickets?.toNumber()}</p>
        </div>
      </div>
      <CountdownTimer />
    </div>
  );
};

export default NextDraw;

{
}
