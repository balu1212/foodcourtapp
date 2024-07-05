import { useContext } from "react"
import { assets } from "../assets/assets"
import { StoreContext } from "../utilities/StoreContex"

const FoodDisplay = ({ id,image, name, description, price }) => {
    const{cart,addToCart,removeFromCart}=useContext(StoreContext);
    return (
        <div className="food-item" >
            <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt="Menu-img" />
                {!cart[id]?
                 <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="...addImg"/>
                :<div className="food-item-counter">
                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="...MinusImg"/>
                 <p>{cart[id]}</p>
                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="...PlusImg"/>
                </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p><b>{name}</b></p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}
export default FoodDisplay