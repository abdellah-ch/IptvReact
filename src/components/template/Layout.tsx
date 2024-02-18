import { Outlet } from "react-router-dom";
import NavBar from "../organisms/NavBar";
const Layout = () =>{

return (
    <main>
    <NavBar/>
    <Outlet/>
    </main>
)
}
export default Layout;