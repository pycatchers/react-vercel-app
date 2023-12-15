import styles from "./styles";

function Post(){
    return (
        <div className="container" style={styles.container}>
            <div className="left" style={styles.left}>125</div>
            <div className="right" style={styles.right}>
                <div>PINNED BY MODERATORS</div>
                <div>Posted by u/GennaroIsGod Admin 3 years ago</div>
                <div>Hello Members of r/React</div>
                <div>33 Comments Share Save</div>
            </div>
        </div>
    )
}

export default Post;