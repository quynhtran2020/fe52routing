import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from "./constant";
import Axios from "axios";

export const actLoginApi = (data) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: data,
    })
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        console.log(result.data);
        // localStorage.setItem("TaiKhoan", JSON.stringify(result.data));
        // alert("Success");
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
        // alert("Failed");
      });
  };
};
const actLoginRequest = () => {
  return {
    type: AUTH_PAGE_REQUEST,
  };
};
const actLoginSuccess = (data) => {
  return {
    type: AUTH_PAGE_SUCCESS,
    payload: data,
  };
};
const actLoginFailed = (err) => {
  return {
    type: AUTH_PAGE_FAILED,
    payload: err,
  };
};
