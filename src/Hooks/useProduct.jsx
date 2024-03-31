import { useEffect, useState } from "react";

const useProduct = () => {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return [product, loading]
};

export default useProduct;