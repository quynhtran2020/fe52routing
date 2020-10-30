import React, { Component } from "react";
import Axios from "axios";
import Movie from "./../../../components/Movie";

export default class ListMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: [],
      loading: false,
    };
  }
  // Chạy sau render
  componentDidMount() {
    this.setState({
      loading: true,
    });
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        console.log(result.data);
        this.setState({
          listMovie: result.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderHTML = () => {
    const { listMovie } = this.state;
    return listMovie.map((movie, index) => {
      return <Movie key={index} movie={movie} />;
    });
  };

  render() {
    const { loading } = this.state;
    if (loading) return <div>Loading...</div>;
    return (
      <div className="container">
        <h1>ListMoviePage</h1>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
