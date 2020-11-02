import React, { Component } from "react";
import { actLoginApi } from "./module/action";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.dangNhap(this.state);
    // if (this.props.data) {
    //   console.log(this.props.data);
    // }
  };
  // componentDidMount() {
  //   if (this.props.data) {
  //     console.log(this.props.data);
  //   }
  // }
  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>AuthPage</h3>
            {!this.props.data ? (
              <div className="alert alert-danger">Tài khoản ko đúng</div>
            ) : (
              ""
            )}
            <form onSubmit={this.handleLogin}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleOnChange}
                  value={this.state.taiKhoan}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleOnChange}
                  value={this.state.matKhau}
                />
              </div>
              <button className="btn btn-success" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.authReducer.data,
    loading: state.authReducer.loading,
    err: state.authReducer.err,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dangNhap: (userData) => {
      dispatch(actLoginApi(userData));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
