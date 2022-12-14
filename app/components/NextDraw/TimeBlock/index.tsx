import { FC } from "react";
import styles from "./timeBlock.module.scss";

interface TimeBlock {
  text: string;
  value: number;
}

const TimeBlock: FC<TimeBlock> = ({ text, value }) => {
  return (
    <li className={styles.item}>
      <span>{value}</span>
      <p className={styles.absoluteElement}>{text}</p>
    </li>
  );
};

export default TimeBlock;
