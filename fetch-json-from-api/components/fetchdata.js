import React, {useEffect, useState} from 'react'

const FetchData = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
            return response.json();
        }).then((data) => {
            setPosts(data);
        })
        
    }

    useEffect(() => { fetchData() }, []);

    return(
        <div>
            <h1>My articles</h1>
            {
                posts.map((post) => (
                    <div>{ post.title }</div>
                ))
            }

        </div>
    )
};

export default FetchData
