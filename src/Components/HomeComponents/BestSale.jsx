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
        <div>
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