import { useContext, useEffect, useState } from "react";
import { menu_list } from "../assets/assets";
import { food_list } from "../assets/assets";
import ExploreMenu from "./ExploreMenu";
import "./Menu.css"
import FoodDisplay from "./FoodDisplay";
import  { StoreContext } from "../utilities/StoreContex";
const Menu = () => {
    const [categoryType, setCategory] = useState("All");
    const {setToggle}=useContext(StoreContext);
    useEffect(()=>
    {
       setToggle(true);
    },[])
    return (
        <div className="Menupage">
            <h2 style={{margin:'25px 0px'}}>What's on your mind?</h2>
            <div className="MenuBox">
                {menu_list.map((item, index) => {
                    return (
                        <ExploreMenu key={index} menu_image={item.menu_image}
                            menu_name={item.menu_name} setCategory={setCategory} categoryType={categoryType}  />
                    )
                })}
               
            </div>
           <div className="line"></div>
            <h2 style={{margin:'25px 0px'}}>Choose your favorite food here</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if(categoryType=== "All" || categoryType === item.category)
                         {
                        return <FoodDisplay key={index} id={item._id} image={item.image} name={item.name} category={item.category}
                            description={item.description} price={item.price} />
                         }
                })}
            </div>
        </div>
    )
}
export default Menu;