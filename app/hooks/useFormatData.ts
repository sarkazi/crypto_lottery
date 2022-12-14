import { BigNumber, ethers } from "ethers";
import { currency } from "../../constants";

export const formatData = (typeData: BigNumber): string => {
  const data =
    typeData && Number(ethers.utils.formatEther(typeData?.toString()));

  return `${data} ${currency}`;
};

export const formatDataForPurchase = (
  typeData: BigNumber,
  quantity: number
) => {
  const data = ethers.utils.parseEther(
    (Number(ethers.utils.formatEther(typeData)) * quantity).toString()
  );

  return data;
};
