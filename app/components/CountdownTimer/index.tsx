import Countdown from "react-countdown";
import { FC } from "react";
import TimeBlock from "../NextDraw/TimeBlock";
import styles from "./countdownTimer.module.scss";
import { useTWImports } from "../../hooks/useTWImports";

interface Props {
  minutes: number;
  hours: number;
  seconds: number;
  completed: boolean;
}

const CountdownTimer: FC = () => {
  const { expiration } = useTWImports();

  const renderer = ({ minutes, hours, seconds, completed }: Props) => {
    if (completed) {
      return (
        <div className={styles.timeBlock}>
          <h2>
            Продажа билетов остановлена. Жмите на "Перезапустить розыгрыш".
          </h2>
        </div>
      );
    } else {
      return (
        <div className={styles.timeBlock}>
          <h2 className="animate-bounce">Осталось времени:</h2>
          <ul className={styles.timeList}>
            <TimeBlock value={hours} text="часа" />
            <TimeBlock value={minutes} text="мин." />
            <TimeBlock value={seconds} text="сек." />
          </ul>
        </div>
      );
    }
  };

  return <Countdown date={new Date(expiration * 1000)} renderer={renderer} />;
};

export default CountdownTimer;
