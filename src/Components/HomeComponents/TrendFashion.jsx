
import trendFashion from '../../assets/Banner/FashionTrends.png'
import newBanner from '../../assets/Banner/add1.jpg'
import shopBanner from '../../assets/Banner/shop.jpg'
import ProductCard from '../ProductCard';
import useProduct from '../../Hooks/useProduct';
const TrendFashion = () => {

    const [product] = useProduct();
    const products = product.filter(product => product.category === 'trend-fashion')
    
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('product.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const fashionTrend = data.filter(product => product.category === 'trend-fashion');
    //             setProducts(fashionTrend)
    //         })
    // }, [])
    return (
        <div className='my-12'>
            <div className='pt-12'>
                <img src={trendFashion} className='w-full md:h-[70vh] rounded-lg' alt="banner" />
            </div>
            <div className="my-12 md:w-96 pt-12 mx-auto">
                <h1 className="text-gray-800 font-bold text-4xl border-b-4 p-3 border-black text-center">Fashion Trends </h1>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
<div className='grid grid-cols-1 md:grid-cols-2 my-12'>
    <img src={newBanner} alt="" className='rounded-l-lg' />
    <img src={shopBanner} alt="" className='rounded-r-lg' />
</div>
        </div>
    );
};

export default TrendFashion;