import { Outlet } from "react-router-dom";
import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";
const Layout = () => {

    return (
        <main >
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    )
}
export default Layout;