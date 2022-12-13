import { ethers } from "ethers";
import { currency } from "../constants";

export const formatData = (typeData) => {
  const data =
    typeData && Number(ethers.utils.formatEther(typeData.toString()));

  return `${data} ${currency}`;
};
