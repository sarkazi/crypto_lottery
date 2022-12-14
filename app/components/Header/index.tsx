import { FC } from "react";
import Button from "../Button";
import Layout from "../Layout";
import styles from "./header.module.scss";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useTWImports } from "../../hooks/useTWImports";

const Header: FC = () => {
  const { address, disconnect } = useTWImports();

  return (
    <header className={styles.header}>
      <Layout className="grid grid-cols-2 md:grid-cols-5 items-center justify-between">
        <div className={styles.avatarBlock}>
          <div className={styles.avatar}>
            <img src="./logo.png" alt="avatar" />
          </div>
          <div className={styles.avatarText}>
            <h2>the nikogortio</h2>
            <span>
              Пользователь: {address?.substring(0, 5)}...
              {address?.substring(address.length, address.length - 5)}
            </span>
          </div>
        </div>
        <div className={styles.buttonBlock}>
          <Button link="#price-block" isActive text="Покупка Билетов" />
          <Button onClick={disconnect} text="Выйти" />
        </div>
        <div className={styles.burgerBtn}>
          <Bars3BottomRightIcon />
          <span className={styles.logoutMinScreen}>
            <Button onClick={disconnect} text="logout" />
          </span>
        </div>
      </Layout>
    </header>
  );
};

export default Header;
