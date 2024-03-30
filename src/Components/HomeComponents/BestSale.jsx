
import useProduct from "../../Hooks/useProduct";
import ProductCard from "../ProductCard";

const BestSale = () => {
    const [product] = useProduct();
    const products = product.filter(product => product.category === 'best-sale')


    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('product.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const bestSale = data.filter(product => product.category === 'best-sale');
    //             setProducts(bestSale)
    //         })
    // }, [])
    return (

        <div>
            <div className="my-12 md:w-96 pt-12 mx-auto">
                <h1 className="text-gray-800 font-bold text-4xl border-b-4 p-3 border-black text-center">Our Best Sale </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    products.map(product => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BestSale;