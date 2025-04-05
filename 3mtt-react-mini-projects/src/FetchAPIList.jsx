import {useState, useEffect} from 'react'
import ListComponent from './ListComponent'

function FetchAPIList() {
    const [items, setItems] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newItems = items.filter( item => item.id !== id)
        setItems(newItems)
    }

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw Error("Could not fetch the data for that resource");
            }
            return response.json()
        })
        .then(data => {
            if (data.length === 0) {
                throw Error("The API returned an empty array.");
            }
            setItems(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setIsPending(false)
            setError(err.message)
        })
    }, [])

    return (
        <div className="fetch-api">
            {error && <div className="display-error">Error: {error}</div> }
            {isPending && <p>Fetching Data ...</p>}
            {items && <ListComponent items={items} title='Users List' handleDelete={handleDelete}/>}
        </div>
    );
}

export default FetchAPIList;