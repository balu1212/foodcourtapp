import "./CustomerReview.css"

const CustomerReveiew = () => {
    return (
        <>
            <h1>Our Customers <span style={{color:'orange'}}>Review</span> </h1>
            <div className="customer-review">
                <div className="customer-photo">
                    <img src={require("../assets/customerHero.jpg")} alt="CustomerHeroPhoto" />
                    <div className="customerBox">
                        <img src={require("../assets/customer1.jpg")} alt="Customer1" />
                        <img src={require("../assets/customer2.jpg")} alt="Customer2" />
                        <img src={require("../assets/customer3.jpg")} alt="Customer3" />
                        <p>12k+</p>
                    </div>
                </div>

                <div className="reveiws">
                    <h4 style={{padding:'5px'}}>WHAT THEY SAY</h4>
                    <h2 style={{padding:'3px'}}>What Our Customer Say About Us</h2>
                    <p style={{marginBottom:'15px',padding:'5px'}}>
                        "Effortless food ordering with a vast menu selection, intuitive interface, timely delivery, and exceptional customer service—perfect for every craving."</p>
                    <div className="review">
                            <div className="Customer">
                                <div className="customerimg">
                                <img src={require("../assets/customer1.jpg")} alt="Customer1" />
                                </div>
                                <div className="AboutCustomer">
                                    <h4>Anupama</h4>
                                    <p>Software </p>
                                    <img src={require('../assets/rating_starts.png')} alt='customerRating'/> 
                                </div>
                            </div>
                            <div className="Customer">
                                <div className="customerimg">
                                <img src={require("../assets/customer2.jpg")} alt="Customer1" />
                                </div>
                                <div className="AboutCustomer">
                                    <h4>AbhiRam</h4>
                                    <p>Lecturer</p>
                                    <img src={require('../assets/rating_starts.png')} alt='customerRating'/> 
                                </div>
                            </div>
                            <div className="Customer">
                                <div className="customerimg">
                                <img src={require("../assets/customer3.jpg")} alt="Customer1" />
                                </div>
                                <div className="AboutCustomer">
                                    <h4>Mrunal </h4>
                                    <p>Actor</p>
                                    <img src={require('../assets/rating_starts.png')} alt='customerRating'/> 
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerReveiew