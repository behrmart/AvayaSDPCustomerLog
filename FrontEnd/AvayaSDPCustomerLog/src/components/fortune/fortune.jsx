import { useEffect, useState } from 'react'


const url = "http://192.168.100.23:3333/fortunejson"; // JSON resource URL



const Fortune = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        if (loading) {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    console.log("JSON data fortunetext[1] :" + data.fortunetext[1]);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    fortunetext = `${url} Fortune JSON server Fetch error`;
                });
        }
    }, []);




    if (loading) {
        return (
            <>
                <div className='p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 text-center'>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3 text-center">
                    <p className="text-warning-emphasis">{data.fortunetext[1]}</p>
                    <p className="text-success-emphasis">{data.fortunetype}</p>
                </div>

            </>
        )
    }

}

export default Fortune