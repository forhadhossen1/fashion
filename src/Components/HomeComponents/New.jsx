import { useEffect, useState } from "react";
import newBanner from '../../assets/Banner/newBanner.jpg'
import ProductCard from "../ProductCard";

const New = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                const newFashion = data.filter(product => product.category === 'new');
                setProducts(newFashion)
            })
    }, [])
    return (
        <div className='my-12'>
            <div className='pt-12'>
                <img src={newBanner} className='w-full md:h-[70vh] rounded-lg' alt="banner" />
            </div>
            <div className="my-12 md:w-96 pt-12 mx-auto">
                <h1 className="text-gray-800 font-bold text-4xl border-b-4 p-3 border-black text-center">New Fashion </h1>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default New;