import { toast, TypeOptions } from "react-toastify";

const messageToast = {
  configuracoesPadrao: {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
  },
  error: (message: string) => {
    messageToast.toast(message, toast.TYPE.ERROR);
  },
  sucess: (message: string) => {
    messageToast.toast(message, toast.TYPE.SUCCESS);
  },
  warn: (message: string) => {
    messageToast.toast(message, toast.TYPE.WARNING);
  },
  info: (message: string) => {
    messageToast.toast(message, toast.TYPE.INFO);
  },
  toast: (message: string, type: TypeOptions) => {
    toast(message, {
      ...messageToast.configuracoesPadrao,
      type: type,
    });
  },
};

export default messageToast;
