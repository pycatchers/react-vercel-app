import styles from "./styles";

function Post({ post }){
    // console.log('postpost', post)

    // title
    // ups
    // author
    // num_comments
    // created
    // link_flair_text

    return (
        <div className="container" style={styles.container}>
            <div className="left" style={styles.left}>{post.ups}</div>
            <div className="right" style={styles.right}>
                {/* <div>PINNED BY MODERATORS</div> */}
                <div>Posted by u/{post.author} {post.author_flair_text} {post.created} ago</div>
                <div>{post.title}</div>
                <div>{post.num_comments} Comments Share Save</div>
            </div>
        </div>
    )
}

export default Post;