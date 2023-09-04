import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import cartEmpty from "../assets/img/CartEmpty.gif";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    //console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems?.length !== 0 && (
                    <button
                        className=" p-2 m-2 bg-black text-white rounded-lg"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                )}
                {cartItems?.length === 0 && (
                    <div>
                        <h1 className="font-bold text-2xl  font-adelia mt-6">
                            {" "}
                            Cart is empty. Add Items to the cart!
                        </h1>
                        <img
                            className="ml-[80] mt-4"
                            src={cartEmpty}
                            alt="cart-empty"
                        />
                    </div>
                )}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
