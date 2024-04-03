import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>Nav barr</div>
            <Outlet />
        </>
    )
}

export default Layout;