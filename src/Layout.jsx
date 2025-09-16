import { Outlet } from "react-router-dom";
import TopHeader from "./Component/TopHeader";
import TopMenu from "./Component/TopMenu";
import Footer from "./Component/Footer";
const Layout=()=>{
    return(
        <>
            <div id="topNav">
                <TopHeader/>
                <TopMenu/>
            </div>
            <hr />
                <Outlet/>
                <Footer/>
        </>
    )
}
export default Layout;