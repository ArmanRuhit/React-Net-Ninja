import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController()
        setTimeout(
            () => {fetch(url, {signal: abortController.signal})
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
            if(err.name === 'AbortError'){
                console.log('fetch Aborted');
            }else {
                setError(err.message);
                setIsPending(false);
            }
            
        })
    },500);
    return () => abortController.abort;
    }, [url]);
    return {data, isPending, err};
}
 
export default useFetch;