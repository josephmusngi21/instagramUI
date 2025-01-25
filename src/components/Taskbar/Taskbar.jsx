import React from "react";
import styles from './Taskbar.module.css';

export default function Taskbar () {
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}> 
                <img src="" alt="logo" />
            </div>
            <ul className={styles.menu}>
                <li><img src="" alt="home" /> Home</li>
                <li><img src="" alt="search" /> Search</li>
                <li><img src="" alt="explore" /> Explore</li>
                <li><img src="" alt="reels" /> Reels</li>
                <li><img src="" alt="messages" /> Messages</li>
                <li><img src="" alt="explore" /> Explore</li>
                <li><img src="" alt="notifications" /> Notifications</li>
                <li><img src="" alt="create" /> Create</li>
                <li><img src="" alt="profile" /> Profile</li>
            </ul>

            <ul>
                <li><img src="" alt="AI Studio" /> AI Studio</li>
                <li><img src="" alt="Threads" /> Threads</li>
                <li><img src="" alt="More" /> More</li>
            </ul>
        </div>
    );
}