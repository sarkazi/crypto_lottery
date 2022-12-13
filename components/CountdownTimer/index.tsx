import Countdown from "react-countdown";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { FC } from "react";
import TimeBlock from "../NextDraw/TimeBlock";
import styles from "./countdownTimer.module.scss";

interface Props {
  minutes: number;
  hours: number;
  seconds: number;
  completed: boolean;
}

const CountdownTimer: FC = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  const { data: expiration } = useContractRead(contract, "expiration");

  const renderer = ({ minutes, hours, seconds, completed }: Props) => {
    if (completed) {
      return (
        <div className={styles.timeBlock}>
          <h2>Ticket sales have now CLOSED for this draw!</h2>
        </div>
      );
    } else {
      return (
        <div className={styles.timeBlock}>
          <h2 className="animate-bounce">Time Remaining:</h2>
          <ul className={styles.timeList}>
            <TimeBlock value={hours} text="hours" />
            <TimeBlock value={minutes} text="minutes" />
            <TimeBlock value={seconds} text="seconds" />
          </ul>
        </div>
      );
    }
  };

  return <Countdown date={new Date(expiration * 1000)} renderer={renderer} />;
};

export default CountdownTimer;
