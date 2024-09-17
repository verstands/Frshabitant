import { Outlet } from 'react-router-dom'
import SidebarAgent from './SidebarAgent'
import { useEffect, useState } from 'react';
const   LayoutAgent = () => {
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

        {windowWidth > 750 ? (
        <div className="flex">
            <div className="md:basis-[17%] md:h-[100vh] sticky top-0">
                <SidebarAgent />
            </div>
            <div className="md:basis-[83%] bg-[#f8f9fb] border">
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
}

export default LayoutAgent