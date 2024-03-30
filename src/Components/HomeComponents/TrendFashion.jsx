import { useEffect, useState } from 'react';
import trendFashion from '../../assets/Banner/FashionTrends.png'
const TrendFashion = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                const fashionTrend = data.filter(product => product.category === 'trend-fashion');
                setProducts(fashionTrend)
            })
    }, [])
    return (
        <div className='my-12'>
            <div className='pt-12'>
                <img src={trendFashion} className='w-full md:h-[70vh]' alt="banner" />
            </div>
            <div className="my-12 w-96 pt-12 mx-auto">
                <h1 className="text-gray-800 font-bold text-4xl border-b-4 p-3 border-black text-center">Fashion Trends </h1>
            </div>
            {

            }
        </div>
    );
};

export default TrendFashion;