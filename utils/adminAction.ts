import toast from "react-hot-toast";

export const toastTexts = {
  loading: {
    drawWinner: "Выбираем счастливчика...",
    onRestartDraw: "Перезапуск розыгрыша...",
    onWithDrawComission: "Отзываем комиссию...",
    RefundAll: "Возвращаем средства...",
  },
  success: {
    drawWinner: "Счастливчик выбран!",
    onRestartDraw: "Розыгрыш перезапущен. Удачи!",
    onWithDrawComission: "Комиссия отозвана!",
    RefundAll: "Возврат средств успешно завершён!",
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
    toast.error("Упппсс, что-то пошло не так... :(", {
      id: notification,
    });
  }
};
