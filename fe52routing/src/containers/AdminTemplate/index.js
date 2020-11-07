import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./../../components/NavbarAdmin";

function AdminLayout(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        // Xóa localStorage.removeItem("UserAdmin")
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}
