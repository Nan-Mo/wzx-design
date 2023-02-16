import { Dialog } from "react-vant";
var DialogAlert = function DialogAlert(message) {
  return Dialog.alert({
    message: message,
    confirmButtonColor: '#cc1d23'
  });
};
export default DialogAlert;