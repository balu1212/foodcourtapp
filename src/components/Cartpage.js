import { useContext, useEffect } from "react";
import './Cartpage.css'
import { StoreContext } from "../utilities/StoreContex"
import { Link } from "react-router-dom";
const Cartpage = () => {
    const { cart, removeFromCart, food_list,getTotalAmount } = useContext(StoreContext);
useEffect(()=>
{
    console.log("Total amount is"+getTotalAmount());
})
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                <hr />
                {Object.keys(cart).length !== 0 && food_list.map((item, index) => {
                    if (item._id in cart) {
                        return (
                            <div key={index}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt="Food Image" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cart[item._id]}</p>
                                    <p>${item.price * cart[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalAmount()===0?0:1}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalAmount()===0?0:getTotalAmount()+1}</b>
                        </div>
                    </div>
                  <Link to="/order"> <button>PROCEED TO CHECKOUT</button></Link>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code' /><button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Cartpage;
