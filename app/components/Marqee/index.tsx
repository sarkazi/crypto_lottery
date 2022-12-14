import Marquee from "react-fast-marquee";
import styles from "./marqee.module.scss";
import { useTWImports } from "../../hooks/useTWImports";
import { FC } from "react";
import { formatData } from "../../hooks/useFormatData";

const Marqee: FC = () => {
  const { lastWinner, lastWinnerAmount } = useTWImports();

  return (
    <Marquee className={styles.marqee} gradient={false} speed={100}>
      <div className={styles.main}>
        <h4>Предыдущий победитель: {lastWinner?.toString()}</h4>
        <h4>
          Предыдущий выигрыш: {lastWinnerAmount && formatData(lastWinnerAmount)}
        </h4>
      </div>
    </Marquee>
  );
};

export default Marqee;
