import { useDispatch, useSelector } from "react-redux"
import ItemsList from "./ItemsList";
import { clearItem } from "../../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(store => store.cart.items);
    const handleClearCart = () => {
        dispatch(clearItem())
    } 
    return(
        <div className="text-center m-10 p-10">
            <h1 className="text-lg font-extrabold">Cart</h1>
            <div>
            <ItemsList items={cartItems}></ItemsList>
            </div>
            {cartItems.length === 0 && <h1>Please add items to your cart!!</h1> }
            <button className="bg-slate-600 text-white rounded-lg"
            onClick={handleClearCart}>Clear Cart</button>
        </div>
     )
}

export default Cart