import toast from "react-hot-toast";

export const toastTexts = {
  loading: {
    drawWinner: "Picking a lucky winner...",
    onRestartDraw: "Restarting draw...",
    onWithDrawComission: "Withdrawing comission...",
    RefundAll: "Refunding all...",
  },
  success: {
    drawWinner: "A Winner has been selected!",
    onRestartDraw: "Draw restarted successfully!",
    onWithDrawComission: "Your comission has been withdrawn successfully!",
    RefundAll: "All refunded successfully!",
  },
};

export const adminAction = async (
  action: any,
  loadingText: string,
  successText: string
) => {
  const notification = toast.loading(loadingText);

  try {
    await action([{}]);

    toast.success(successText, {
      id: notification,
    });
  } catch (err) {
    console.log(err);
    toast.error("Whoops something went wrong", {
      id: notification,
    });
  }
};
