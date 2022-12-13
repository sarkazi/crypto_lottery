import { FC, ReactNode } from "react";
import styles from "./layout.module.scss";

interface Layout {
  children: ReactNode;
  className?: string;
}

const Layout: FC<Layout> = ({ children, className }) => {
  return <div className={`${styles.main} ${className}`}>{children}</div>;
};

export default Layout;
