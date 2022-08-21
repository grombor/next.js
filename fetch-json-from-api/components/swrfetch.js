import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const SWRfetch = () => {
    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts/", fetcher)
    
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div>
        { data.map((post) => (
            <div>{ post.title }</div>
        )) }
        </div>
    )
}

export default SWRfetch

// https://www.smashingmagazine.com/2020/06/introduction-swr-react-hooks-remote-data-fetching/
