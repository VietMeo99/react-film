import { callApi } from './../utils/callAPI';
import StorageService from '../utils/storageService';

export const validate = (name: string, value: string, error: any) => {
  if (name === "email") {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    const check = !regex.test(value);
    // const check = regex.test(value) || vnf_regex.test(value) ? false : true;
    // if (!regex.test(value) || !vnf_regex.test(value)) {
    if (check) { 
      error.email =
        "Tài khoản phải là Email";
    } else {
      error.email = "";
    }
  }
  if (name === "name") {
    if (value.trim().length < 6) {
      error.name = "Phải có ít nhất 6 ký tự"
    } else {
      error.name = ""
    }
  }
  if (name === "password" || name === "password_old" || name === "password_new") {
    // console.log("name: ", name);
    if (value.trim().length < 8) {
      error[name] = "Mật khẩu dài hơn 8 kí tự";
    } else {
      error[name] = "";
    }
  }
}

export async function updateFcmToken() {
  // if (localStorage.getItem('notification-permission') === "1") {
  //     let fcmToken: string | null = localStorage.getItem('fcm-token');
  //     if (!fcmToken) {
  //         fcmToken = await messaging.getToken();
  //         localStorage.setItem('fcm-token', fcmToken as string);
  //     }
  //     await service.updateFcmToken(fcmToken as string);
  // }
}
export async function logOut() {
  // const url: string = (window as any).REACT_APP_API_AUTH + 'logout';
  // const result = await deleteRequest(url, {
  //     fcmToken: localStorage.getItem('fcm-token')
  // });
  const resultApi = await callApi(
    "/v1/auth/logout",
    "DELETE",
    { fcmToken: localStorage.getItem('fcm-token') },
    true)
  if (resultApi.result.status < 300) {
    // loginStore.user = null;
    StorageService.removeToken();
    StorageService.removeRefreshToken();
    window.location.href = "/";
  }
}