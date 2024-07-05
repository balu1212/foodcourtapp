import "./Howitworks.css"
const Howitworks = () => {
    return (
        <>
           
            <div className="Howitwork">
            <h1><spna style={{ color: 'Green' }}>Our</spna> <span style={{ color: 'red' }}>Services</span></h1>
            <div className="Howitworkhero">
                    <div className="Herobanner">
                        <img src={require("../assets/howitwork_hero.png")} alt="Hero img.." />
                    </div>
                    <div className="HerobannerContent">
                        <h3 style={{color:'red'}}>what we serve</h3>
                        <h2>Just sit back at home we will take care</h2>
                        <p>"Enjoy our exceptional service from the comfort of your home with seamless online ordering. Quick, reliable, and hassle-free—because we're dedicated to making your experience effortless and enjoyable."</p>
                    </div>
                </div>
                
                <div className="Howitwork-services">
                    <div className="services">
                        <img src={require("../assets/choose-food.jpg")} alt="Hero img.." />
                        <p>Choose Your Favorite Food</p>
                    </div>
                    <div className="services">
                        <img src={require("../assets/easy-payment.avif")} alt="Hero img.." />
                        <p>Easy Payment Methods</p>
                    </div>
                    <div className="services">
                        <img src={require("../assets/fast-delivery.jpg")} alt="Hero img.." />
                        <p>Free And Fast Delivery</p>
                    </div>
                    <div className="services">
                        <img src={require("../assets/enjoy-meal.jpg")} alt="Hero img.." />
                        <p>Finally Enjoy your Food</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Howitworks;  