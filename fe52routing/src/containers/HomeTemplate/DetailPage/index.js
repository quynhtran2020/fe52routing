import React, { Component } from "react";
import { actDetailPageApi } from "./module/action";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
// Điều kiện (this.pros.data) === (this.pros.data?.)
import { Link } from "react-router-dom";

class DetailPage extends Component {
  componentDidMount() {
    // console.log(this.props); //console ra được 1 object do react-router dom tạo ra
    console.log(this.props.match.params.id);
    const { id } = this.props.match.params;
    this.props.getDetailMovie(id);
  }
  renderPhim = () => {
    if (this.props.data?.lichChieu && this.props.data?.lichChieu.length > 0) {
      return this.props.data.lichChieu.map((item, index) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>
              <Link className="btn btn-success" to="/">
                Booking
              </Link>
            </td>
          </tr>
        );
      });
    }
  };
  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h2>Detail Page</h2>
        <div className="row">
          <div className="col-6">
            <img
              src={this.props.data && this.props.data.hinhAnh}
              style={{ width: "300px" }}
            />
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tên phim</td>
                  <td>{this.props.data?.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{this.props.data?.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Cụm rạp</th>
                  <th>Tên rạp</th>
                  <th>Giờ chiếu</th>
                  <th>Ngày chiếu</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.renderPhim()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(actDetailPageApi(id));
    },
  };
};
const mapStateToProp = (state) => {
  return {
    loading: state.detailPageReducer.loading,
    data: state.detailPageReducer.data,
    err: state.detailPageReducer.err,
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(DetailPage);
