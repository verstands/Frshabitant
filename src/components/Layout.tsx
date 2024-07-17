import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth > 640 ? (
        <div className="flex">
          <div className="md:basis-[15%] md:h-[100vh] sticky top-0">
            <Sidebar />
          </div>
          <div className="md:basis-[85%] bg-[#fbfcff] border">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="basis-[100%] h-[100vh] p-2 relative">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Layout;
