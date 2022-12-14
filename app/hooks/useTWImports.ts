import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";

export const useTWImports = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connectMyMetamask = useMetamask();
  const { contract, isLoading } = useContract(
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

  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    address
  );

  const { data: lotteryOperator } = useContractRead(
    contract,
    "lotteryOperator"
  );

  const { data: tickets } = useContractRead(contract, "getTickets");

  const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
    "DrawWinnerTicket"
  );

  const { mutateAsync: restartDraw } = useContractWrite(
    contract,
    "restartDraw"
  );

  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    "WithdrawCommission"
  );

  const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll");

  const { data: totalCommission } = useContractRead(
    contract,
    "operatorTotalCommission"
  );

  const { data: lastWinner } = useContractRead(contract, "lastWinner");
  const { data: lastWinnerAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");

  const { mutateAsync: WithdrawWinnings } = useContractWrite(
    contract,
    "WithdrawWinnings"
  );

  return {
    address,
    contract,
    RemainingTickets,
    CurrentWinningReward,
    ticketPrice,
    ticketCommission,
    expiration,
    winnings,
    lotteryOperator,
    tickets,
    disconnect,
    DrawWinnerTicket,
    restartDraw,
    WithdrawCommission,
    RefundAll,
    totalCommission,
    isLoading,
    connectMyMetamask,
    lastWinner,
    lastWinnerAmount,
    BuyTickets,
    WithdrawWinnings,
  };
};
