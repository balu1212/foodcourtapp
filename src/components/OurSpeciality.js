import { Link } from "react-router-dom";
import "./OurSpeciality.css"
const OurSpeciality=()=>
    {
        return(
            <>
            <h1>Our <span style={{color:'orange'}}>Speciality</span></h1>
            <div className="OurSpeciality">
                <div className="special">
                  <img src={require("../assets/specialfood-1.avif")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>30%-40%</h3>
                  <h2>Biryani</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link> 
                  </div>
                </div>
                <div className="special">
                  <img src={require("../assets/specialfood-3.jpg")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>20%-30%</h3>
                  <h2>Salad</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link>
                  </div>
                </div>
              
                <div className="special">
                  <img src={require("../assets/specialfood-2.avif")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>50%-60%</h3>
                  <h2>Veg-Biryani</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link>
                  </div>
                </div>
                <div className="special">
                  <img src={require("../assets/specialfood-5.jpg")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>25%-30%</h3>
                  <h2>Sandwich</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link>
                  </div>
                </div>
                <div className="special">
                  <img src={require("../assets/specialfood-6.jpg")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>35%-45%</h3>
                  <h2>Pasta</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link>
                  </div>
                </div>
                <div className="special">
                  <img src={require("../assets/specialfood-4.avif")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>10%-20%</h3>
                  <h2>Noodels</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link>
                  </div>
                </div>
                <div className="special">
                  <img src={require("../assets/specialfood-7.jpg")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>10%-15%</h3>
                  <h2>Deserts</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link>
                  </div>
                </div>
                <div className="special">
                  <img src={require("../assets/specialfood-8.jpg")} alt="special doos img 1"/>
                  <div className="specialContent">
                  <h3>5%-10%</h3>
                  <h2>Rolls</h2>
                  <Link to="/foodcourtapp/menu"><button>Order Now</button></Link>
                  </div>
                </div>
            </div>
            </>
        )
    }
    export default OurSpeciality;