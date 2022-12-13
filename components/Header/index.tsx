import { FC, useState } from "react";
import Button from "../Button";
import Layout from "../Layout";
import styles from "./header.module.scss";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

const Header: FC = () => {
  const address = useAddress();
  const disconnect = useDisconnect();

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
              User: {address?.substring(0, 5)}...
              {address?.substring(address.length, address.length - 5)}
            </span>
          </div>
        </div>
        <div className={styles.buttonBlock}>
          <Button isActive text="Buy Tickets" />
          <Button onClick={disconnect} text="Logout" />
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
