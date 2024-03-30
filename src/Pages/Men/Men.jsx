import { Helmet } from "react-helmet-async";
import useProduct from "../../Hooks/useProduct";
import ProductCard from "../../Components/ProductCard";
import menBanner from "../../assets/Banner/menBanner.png"
const Men = () => {
    const [product] = useProduct();
    const products = product.filter(product => product.type === 'men')
    return (
        <div>
            <Helmet>
                <title>Fashion | Men</title>
            </Helmet>

            <div className='pb-12'>
                <img src={menBanner} className='w-full md:h-[70vh] rounded-lg ' alt="banner" />
            </div>

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

export default Men;