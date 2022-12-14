import styles from "./priceBlock.module.scss";
import { FC, useState } from "react";
import DescTextPrice from "./DescTextPrice";
import { formatData, formatDataForPurchase } from "../../hooks/useFormatData";
import toast from "react-hot-toast";
import { currency } from "../../../constants";

import { useTWImports } from "../../hooks/useTWImports";

const PriceBlock: FC = () => {
  const {
    BuyTickets,
    ticketPrice,
    ticketCommission,
    expiration,
    RemainingTickets,
  } = useTWImports();

  const [quantity, setQuantity] = useState<number>(1);

  const handleClick = async () => {
    if (!ticketPrice) return;

    const notification = toast.loading("Buying your tickets...");
    try {
      const data = await BuyTickets([
        {
          value: formatDataForPurchase(ticketPrice, quantity),
        },
      ]);

      toast.success("Tickets purchaise successfully!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Whoops something went wrong", {
        id: notification,
      });
    }
  };

  return (
    <div
      id="price-block"
      className={`${styles.changePriceBlock} stats-сontainer p-5`}
    >
      <div className="stats-сontainer w-full p-5 ">
        <div className={styles.changeTitleBlock}>
          <h2>Price per ticket</h2>
          <p>{formatData(ticketPrice)}</p>
        </div>
        <div className={`${styles.changeInputBlock} bg-bgColor2`}>
          <span>tickets</span>
          <input
            type="number"
            min={1}
            max={10}
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>
        <ul className={styles.textListBlock}>
          <DescTextPrice
            leftText="Total cost of tickets"
            rightText={`${
              +formatData(ticketPrice).split(" ")[0] * quantity
            } matic`}
            textSize="text-sm"
            fontWeight="font-extrabold"
          />
          <DescTextPrice
            leftText="Service fees"
            rightText={formatData(ticketCommission)}
            textSize="text-xs"
          />
          <DescTextPrice
            leftText="+ Network fees"
            rightText="TBC"
            textSize="text-xs"
          />
        </ul>
        <button
          disabled={
            expiration?.toString() < Date.now().toString() ||
            RemainingTickets?.toNumber() === 0
          }
          onClick={handleClick}
          className={styles.drawBtn}
        >
          Buy {quantity} Tickets for{" "}
          {ticketPrice && +formatData(ticketPrice).split(" ")[0] * quantity}{" "}
          {currency}
        </button>
      </div>
    </div>
  );
};

export default PriceBlock;
