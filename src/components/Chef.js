import "./Chef.css"
const Chef = () => {
    return (
        <>
            <h1>Our <span style={{color:'orange'}}>Chef's</span></h1>
            <div className="ChefPage">
                <div className="chef">
                    <img src={require("../assets/chef1.jpg")} />
                    <div className="chefContent">
                        <h2>Johnathan</h2>
                        <p>"Healthy food is my canvas, where fresh ingredients and vibrant flavors paint a masterpiece of nourishment and wellness."</p>
                    </div>

                </div>
                <div className="chef">
                    <img src={require("../assets/chef2.avif")} />
                    <div className="chefContent">
                        <h2>Harry</h2>
                        <p>"In my kitchen, healthy food isn't just a choice; it's a commitment to taste, balance, and the joy of eating well."</p>
                    </div>

                </div>
                <div className="chef">
                    <img src={require("../assets/chef3.avif")} />
                    <div className="chefContent">
                        <h2>Sanji</h2>
                        <p>"From farm to table, I craft dishes that celebrate nature's bounty, promoting vitality and happiness through every delicious bite."</p>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Chef;