import { useContext } from "react";
import "./Order.css";
import { StoreContext } from "../utilities/StoreContex";
import { Link } from "react-router-dom";

const Order = () => {
    const {getTotalAmount,cart}=useContext(StoreContext);
    return (
        <>
            <form className='place-order'>
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>
                    <input type="email" placeholder='Email address' />
                    <input type="text" placeholder='Street' />
                    <div className="multi-fields">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder='Zip code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="number" placeholder="Phone" />
                </div>
                <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalAmount(cart)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalAmount(cart)===0?0:1}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalAmount(cart)===0?0:getTotalAmount(cart)+1}</b>
                        </div>
                    </div>
                  <Link to="/order"> <button>PLACE ORDER</button></Link>
                </div>
                </div>
            </form>
        </>
    )
}
export default Order;   