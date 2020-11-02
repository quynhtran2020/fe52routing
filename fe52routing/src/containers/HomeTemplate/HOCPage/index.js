import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

const ModalForm = WithModal(SanPham);

export default class HOCPage extends Component {
  render() {
    return (
      <div>
        <h3>HOCPage</h3>
        {/* <NhanVien /> */}
        {/* <SanPham /> */}
        <ModalForm />
      </div>
    );
  }
}
