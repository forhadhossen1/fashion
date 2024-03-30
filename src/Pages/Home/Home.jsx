import FooterComponent from "../../Components/FooterComponent";
import Banner from "../../Components/HomeComponents/Banner";
import BestSale from "../../Components/HomeComponents/BestSale";

const Home = () => {
    return (
        <div>
            <Banner />
            <BestSale />
            <FooterComponent />
        </div>
    );
};

export default Home;