import { useState } from "react";

const useBanner = () => {
    const [banner, setBanner] = useState([]);
    const [loading, setLoading] = useState([true]);

    fetch('banner.json')
        .then(res => res.json())
        .then(data => {
            setBanner(data);
            setLoading(false);
        })

    return [banner, loading]
};

export default useBanner;