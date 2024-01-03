import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default Layout;
