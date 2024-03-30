import { useEffect, useState } from "react";

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

        </div>
    );
};

export default BestSale;