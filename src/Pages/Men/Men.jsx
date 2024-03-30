import { Helmet } from "react-helmet-async";
import useProduct from "../../Hooks/useProduct";
import ProductCard from "../../Components/ProductCard";

const Men = () => {
    const [product] = useProduct();
    const products = product.filter(product => product.type === 'men')
    return (
        <div>
            <Helmet>
                <title>Fashion | Men</title>
            </Helmet>

            <div>
                {
                    products.map(product => (<ProductCard
                        key={product._id}
                        product={product}
                    />))
                }
            </div>
        </div>
    );
};

export default Men;