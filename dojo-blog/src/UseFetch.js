import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setError] = useState(null);

    useEffect(() => {
        setTimeout(
            () => {fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();
            }).then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
        }).catch(err => {
            setError(err.message);
            setIsPending(false);
        })
    },1000);
    }, [url]);
    return {data, isPending, err};
}
 
export default useFetch;