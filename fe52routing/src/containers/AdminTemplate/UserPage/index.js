import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddUserApi } from "./module/action";
import Loader from "../../../components/Loader";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUserApi(this.state);

    console.log(this.state);
  };
  handleNoti = () => {
    const { err } = this.props;
    if (err) {
      if (err.response && err.response.status === 401)
        return <div className="alert alert-danger">Chưa có token</div>;
      if (err.response && err.response.data)
        return <div className="alert alert-danger">{err.response.data}</div>;
    }
  };
  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Thêm người dùng</h3>
        <div className="form-group">
          <span>Tài khoản</span>
          <input
            className="form-control"
            name="taiKhoan"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input
            className="form-control"
            name="matKhau"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Họ tên</span>
          <input
            className="form-control"
            name="hoTen"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            className="form-control"
            name="email"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Số điện thoại</span>
          <input
            className="form-control"
            name="soDt"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mã nhóm</span>
          <input
            className="form-control"
            name="maNhom"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mã loại người dùng</span>
          <input
            className="form-control"
            name="maLoaiNguoiDung"
            onChange={this.handleOnChange}
          />
        </div>
        {this.handleNoti()}
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Thêm người dùng
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserApi: (user) => {
      dispatch(actAddUserApi(user));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.addUserReducer.data,
    loading: state.addUserReducer.loading,
    err: state.addUserReducer.err,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
