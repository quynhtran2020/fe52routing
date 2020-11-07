import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from "./constant";
import Axios from "axios";

export const actLoginApi = (data, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data,
    })
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          //Lưu trạng thái login
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          //Chuyển đến trang dashboard
          history.push("/dashboard");
        } else {
          alert("không có quyền truy cập");
        }
        console.log(result.data);
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
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
