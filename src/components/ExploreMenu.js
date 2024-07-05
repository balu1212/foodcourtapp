
const ExploreMenu=({menu_image,menu_name,setCategory,categoryType})=>
    {

        return(
            <div className="MenuCard" onClick={()=>setCategory(prev=>prev===menu_name?"All":menu_name)}>
              <img className={categoryType===menu_name?"Imgactive":""} src={menu_image} alt="Menu-img" />
               <p><b>{menu_name}</b></p>
            </div>
            
        )
    }
  export default ExploreMenu;      