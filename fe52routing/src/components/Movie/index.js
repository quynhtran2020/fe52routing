import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3">
        <div className="card text-left">
          <img className="card-img-top" src={movie.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{movie.tenPhim}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    );
  }
}
