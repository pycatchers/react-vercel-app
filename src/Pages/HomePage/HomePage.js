import React from "react";
import styles from "./styles";
import { Link } from "react-router-dom";



function HomePage () {
    return (
        <div style={{height: '100vh', display: 'flex'}}>
            <div className="leftContainer" style={styles.leftContainer}>
                <dl>
                    <dd><Link to='/dashboard'>Dashboard</Link></dd>
                    <dd>User</dd>
                    <dd>Product</dd>
                    <dd><Link to='/blog'>Blog</Link></dd>
                    <dd>Login</dd>
                    <dd>Not Found</dd>
                </dl>
            </div>
            <div className="mainContainer" style={styles.rightContainer}></div>
        </div>
    )
}

export default HomePage;