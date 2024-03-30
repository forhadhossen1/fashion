import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const BestSale = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                const bestSale = data.filter(product => product.category === 'best-sale');
                setProducts(bestSale)
            })
    }, [])
    return (
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
    );
};

export default BestSale;