import styles from "./priceBlock.module.scss";
import { FC, useState } from "react";
import DescTextPrice from "./DescTextPrice";
import { formatData } from "../../utils/formatData";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import toast from "react-hot-toast";
import { ethers } from "ethers";

const PriceBlock: FC = ({
  ticketPrice,
  ticketCommission,
  expiration,
  RemainingTickets,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");

  const handleClick = async () => {
    if (!ticketPrice) return;

    const notification = toast.loading("Buying your tickets...");
    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
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
    <div className={`${styles.changePriceBlock} stats-сontainer p-5`}>
      <div className="stats-сontainer w-full p-5">
        <div className={styles.changeTitleBlock}>
          <h2>Price per ticket</h2>
          <p>{formatData(ticketPrice)}</p>
        </div>
        <div className={styles.changeInputBlock}>
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
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default PriceBlock;
