import { FC } from "react";
import styles from "./descTextPrice.module.scss";

interface DescTextPrice {
  leftText: string;
  rightText: string;
  textSize?: string;
  fontWeight?: string;
}

const DescTextPrice: FC<DescTextPrice> = ({
  leftText,
  rightText,
  textSize,
  fontWeight,
}) => {
  return (
    <li className={`${styles.item} ${textSize} ${fontWeight}`}>
      <p>{leftText}</p>
      <p>{rightText}</p>
    </li>
  );
};

export default DescTextPrice;
