import { useEffect, useState } from "react";
import Post from "../Post/Post";
import styles from "./styles";

function PostGrid() {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        getAllPosts()
    }, [])


    const getAllPosts = async () => {
        const response = await fetch('https://www.reddit.com/r/react.json');
        const responseJson = await response.json();
        console.log('repsonse', responseJson.data.children)
        setAllPosts(responseJson.data.children)
    }

    return (
        <div style={{
            display: 'grid',
            // gridAutoFlow: 'column',
            gridTemplateColumns: 'repeat(4, 1fr)',
            rowGap: 10,
            // gridAutoColumns: '0.33333fr',
            // gridTemplateRows: 'repeat(2, 1fr)',
            // gridAutoRows: '200px'
        }}>
            {
                allPosts.map((post, index) => 
                    (
                        <Post key={index.toString()} post={post.data}/>
                    )
                )
            }
        </div>
    )
}


export default PostGrid;