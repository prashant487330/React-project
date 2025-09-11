import { Outlet } from "react-router-dom";
import TopHeader from "./Component/TopHeader";
import TopMenu from "./Component/TopMenu";
const Layout=()=>{
    return(
        <>
             <TopHeader/>
             <TopMenu/>
             <hr />
             <Outlet/>
        </>
    )
}
export default Layout;
