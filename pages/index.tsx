import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/page.module.scss";

import { useAddress } from "@thirdweb-dev/react";
import Login from "../components/Login";
import NextDraw from "../components/NextDraw";
import PriceBlock from "../components/PriceBlock";

import { useContract, useContractRead } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  const { data: RemainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: CurrentWinningReward } = useContractRead(
    contract,
    "CurrentWinningReward"
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");

  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );

  const { data: expiration } = useContractRead(contract, "expiration");

  const address = useAddress();

  if (!address) return <Login />;

  return (
    <div className={styles.page}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className={styles.wrapper}>
        <NextDraw
          remainingTickets={RemainingTickets}
          currentWinningReward={CurrentWinningReward}
        />
        <PriceBlock
          ticketPrice={ticketPrice}
          ticketCommission={ticketCommission}
          expiration={expiration}
          RemainingTickets={RemainingTickets}
        />
      </section>
    </div>
  );
};

export default Home;
