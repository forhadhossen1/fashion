
import FooterComponent from "../../Components/FooterComponent";
import Banner from "../../Components/HomeComponents/Banner";
import BestSale from "../../Components/HomeComponents/BestSale";
import New from "../../Components/HomeComponents/New";
import TrendFashion from "../../Components/HomeComponents/TrendFashion";

const Home = () => {
    return (
        <div>
            <Banner />
            <BestSale />
            <New/>
            <TrendFashion/>
            <FooterComponent />
        </div>
    );
};

export default Home;