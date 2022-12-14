import { NextPage } from "next";
import Head from "next/head";
import Header from "../../../app/components/Header";
import styles from "../../../styles/page.module.scss";
import Login from "../../../app/components/Login";
import NextDraw from "../../../app/components/NextDraw";
import PriceBlock from "../../../app/components/PriceBlock";
import WinnerInfo from "../../../app/components/WinnerInfo";
import Marqee from "../app/../../components/Marqee";
import AdminPanel from "../../../app/components/AdminPanel";
import TicketCount from "../../../app/components/TicketCount";
import { useEffect, useState } from "react";

import { useTWImports } from "../../hooks/useTWImports";

const HomePage: NextPage = () => {
  const { address, tickets, winnings, lotteryOperator } = useTWImports();

  const [userTickets, setUserTickets] = useState(0);

  useEffect(() => {
    if (!tickets) return;

    const totalTickets: string[] = tickets;

    const noOfUserTickets = totalTickets.reduce(
      (total, ticketAddress) => (ticketAddress === address ? total + 1 : total),
      0
    );
    setUserTickets(noOfUserTickets);
  }, [address, tickets]);

  if (!address) return <Login />;

  return (
    <div className={styles.page}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Marqee />
      {winnings > 0 && <WinnerInfo />}

      {lotteryOperator === address && (
        <div className="px-[15px] md:w-auto w-full">
          <AdminPanel />
        </div>
      )}

      <section className={styles.wrapper}>
        <NextDraw />
        <div className="">
          <PriceBlock />
          {userTickets > 0 && <TicketCount userTickets={userTickets} />}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
