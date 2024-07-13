import { Outlet } from 'react-router-dom'
import SidebarAgent from './SidebarAgent'

const LayoutAgent = () => {
    return (
        <div className="flex">
            <div className="md:basis-[17%] md:h-[100vh] sticky top-0">
                <SidebarAgent />
            </div>
            <div className="md:basis-[83%] bg-[#f8f9fb] border">
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutAgent