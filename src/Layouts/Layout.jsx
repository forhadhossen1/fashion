import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import FooterComponent from "../Components/FooterComponent"

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterComponent />
        </div>
    );
};

export default Layout;