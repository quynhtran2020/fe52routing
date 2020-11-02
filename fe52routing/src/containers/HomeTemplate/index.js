import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./../../components/NavbarHome";

function HomeLayout(props) {
  return (
    <div>
      {/* //Thanh menu */}
      <NavbarHome />
      {/* //Content */}
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  //...props tương đương lấy các props còn lại (exact và path)
  //   const { exact, path, Component } = props;
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
