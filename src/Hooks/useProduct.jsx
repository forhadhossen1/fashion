import { useEffect, useState } from "react";

const useProduct = () => {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return [product, loading]
};

export default useProduct;