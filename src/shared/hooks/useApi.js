import { useEffect, useState } from "react";

export function useApi(endpoint) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/${endpoint}`)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            });
    }, [endpoint]);

    return {
        data,
        loading,
    };
}