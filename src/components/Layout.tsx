import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex">
            <div className="md:basis-[15%] md:h-[100vh] sticky top-0">
                <Sidebar />
            </div>
            <div className="md:basis-[85%] bg-[#fbfcff] border">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout