import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import { Suspense } from "react";
function Layout() {
  return (
    <>
      <Navigator />
      <Suspense fallback={<h1>WELCOME TO MOVIBRARY</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
