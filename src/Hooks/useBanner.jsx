import { useState } from "react";

const useBanner = () => {
    const [banners, setBanner] = useState([]);
    const [loading, setLoading] = useState([true]);

    fetch('https://fashion-server-topaz.vercel.app/banner')
        .then(res => res.json())
        .then(data => {
            setBanner(data);
            setLoading(false);
        })

    return [banners, loading]
};

export default useBanner;