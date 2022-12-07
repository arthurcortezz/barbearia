import { toast, TypeOptions } from "react-toastify";

const serviceToast = {
  configuracoesPadrao: {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
  },
  erro: (mensagem: string) => {
    serviceToast.toast(mensagem, toast.TYPE.ERROR);
  },
  sucesso: (mensagem: string) => {
    serviceToast.toast(mensagem, toast.TYPE.SUCCESS);
  },
  alerta: (mensagem: string) => {
    serviceToast.toast(mensagem, toast.TYPE.WARNING);
  },
  info: (mensagem: string) => {
    serviceToast.toast(mensagem, toast.TYPE.INFO);
  },
  toast: (mensagem: string, type: TypeOptions) => {
    toast(mensagem, {
      ...serviceToast.configuracoesPadrao,
      type: type,
    });
  },
};

export default serviceToast;
