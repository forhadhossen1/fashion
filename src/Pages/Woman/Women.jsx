import { Helmet } from "react-helmet-async";
import useProduct from "../../Hooks/useProduct";
import ProductCard from "../../Components/ProductCard";

const Women = () => {
    const [product] = useProduct();
    const products = product.filter(product => product.type === 'women')
    return (
        <div>
            <Helmet>
                <title>Fashion | Women</title>
            </Helmet>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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

export default Women;