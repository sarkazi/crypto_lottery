import { FC } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  link?: string;
}

const Button: FC<ButtonProps> = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, isActive && styles.isActive)}
    >
      {text}
    </button>
  );
};

export default Button;
