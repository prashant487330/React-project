import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const TopHeader=()=>{
  const CartData= useSelector(state=>state.mycart.cart);
  const CartLength= CartData.length;
  const navigate = useNavigate();
    return(
        <>
          <div id="topheader">

            {CartLength}
            <FaShoppingCart onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}} />
          </div>
        </>
    )
}
export default TopHeader;