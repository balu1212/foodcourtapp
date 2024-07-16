import { createContext,useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();
const StoreContextProvider = (props) => {
    const [cart, setCart] = useState({});
    const [toggle,setToggle]=useState(false);//It is used to show Cart icon in Menu Button and hide sign in Menu and Show in Home
    //Add items in cart
    const addToCart = (itemid) => {
        !cart[itemid] ? setCart((prev) => ({ ...prev, [itemid]: 1 })) : (setCart((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 })))
    }
   //Remove items from cart
    const removeFromCart = (itemid) => {
        const updatedItems = { ...cart };
        // Decrease the quantity of the specified item by 1
        if (updatedItems[itemid] > 0) {
            updatedItems[itemid] -= 1;
        }
        // Filter out items with quantity greater than 0
        const filteredItems = Object.fromEntries(
            Object.entries(updatedItems).filter(([key, value]) => value > 0)
        );
        // Update state with filtered items
        setCart(filteredItems);
    }

    //Total price of Cartitems
  const getTotalAmount=()=>
  {
    let totalAmout=0;
    Object.keys(cart).length !== 0 && food_list.map((item, index) => {
        if (item._id in cart) {
            totalAmout=totalAmout+(item.price+cart[item._id])
        }
    })
    return totalAmout;
  }

  //The values which we want to access through application
    const ContextValues = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        food_list,
        getTotalAmount,
        toggle,
        setToggle,
    }
    // useEffect(() => {
    //     console.log(cart)
    // }, [cart]);
    return (
        <StoreContext.Provider value={ContextValues}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;