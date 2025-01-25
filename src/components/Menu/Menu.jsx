import React, { useState, useEffect } from "react";
import styles from './Menu.module.css'
import feedsData from "./feeds.json";

export default function Menu() {
    const [feeds, setFeeds] = useState([]);
    // Each feed represented as a json object with the following properties:
    // user, post, time, comments, likes

    useEffect(() => {
        setFeeds(feedsData);
    }, []);

    return (
        <div className={styles.container}>
            <ul className={styles.feedList}>
                {feeds.map((feed, index) => (
                    <li key={index}>
                        <p>User: {feed.user}</p>
                        <p>Post: {feed.post}</p>
                        <p>Time: {feed.time}</p>
                        <p>Likes: {feed.likes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
