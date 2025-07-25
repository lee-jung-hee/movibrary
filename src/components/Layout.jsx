import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import { Suspense } from "react";
import SkeletonUI from "./SkeletonUI";
function Layout() {
  return (
    <>
      <Navigator />
      <Suspense fallback={<SkeletonUI />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
