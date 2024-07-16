import { Link } from 'react-router-dom';
import './Home.css'
import Howitworks from './Howitworks';
import OurSpeciality from './OurSpeciality';
import Footer from './Footer';
import Chef from './Chef';
import CustomerReveiew from './CustomerReview';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../utilities/StoreContex';
const Home = () => {
    const {setToggle}=useContext(StoreContext);
    useEffect(()=>
    {
      setToggle(false);
    },[])
    return (
        <>
            <div className="Home">
                <div className="HomeContent" >
                    <h1 >"Delight in Every Bite, Order <span style={{ color: 'orange' }}>Day or Night."</span></h1>
                    <p>Order your tasty food from here and indulge in a delightful culinary experience! Explore our diverse menu crafted with passion and quality ingredients, ensuring every bite is a savory delight. Place your order now and savor the flavors that will satisfy your cravings. </p>
                    <Link to="/menu"><button>Order Here</button></Link>
                </div>
                <div className="HomeImg" >
                    {/* <img src={assets.home_bg} alt="Home-Background img...." /> */}
                    <img src={require('../assets/home_Biryani-2.avif')} alt='img..' />
                </div>
                {/* <div className='FoodImages'>
                <div className='FoodImages-container'>
                    <div className='imagecard'>
                        <img src={require('../assets/menu_2.png')} alt='img..' />
                    </div>
                    <div className='imagecard'>
                        <img src={require('../assets/menu_1.png')} alt='img..' />
                    </div>
                </div>
                <div className='FoodImages-container'>
                    <div className='imagecard'>
                        <img src={require('../assets/chicken-curry-1.png')} alt='img..' />
                    </div>
                    <div className='imagecard'>
                        <img src={require('../assets/chicken-cuury-2.png')} alt='img..' />
                    </div>
                </div>
            </div>  */}
            </div>
            <Chef/>
            <OurSpeciality />
            <Howitworks />
            <CustomerReveiew/>
            <Footer />
        </>
    )
}
export default Home;
