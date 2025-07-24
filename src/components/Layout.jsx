import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";

function Layout() {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
}

export default Layout;
