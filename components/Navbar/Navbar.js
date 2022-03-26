import React from 'react';
import styles from "./Navbar.module.css";
import Image from 'next/image';
import { SearchIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/solid";
import logo from "../../public/assests/logo.svg";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                {/* Left */}
                <div className={styles.image}>
                    <Image src={logo} alt="logo" layout='fill' objectFit='contain' />
                </div>

                {/* Right */}
                <div className={styles.container}>
                    <div className={styles.search}>
                        <input type="text" placeholder='SEARCH A SKILL' />
                        <SearchIcon />
                    </div>

                    <div className={styles.icon}>
                        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.6667 22L18.3334 22" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M36.6667 11L7.33337 11" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M36.6667 33L29.3334 33" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <p className={styles.login}>Log In</p>

                    <button className={styles.button}>Sign In</button>
                </div>
            </div>

            {/* for screens less than 490px */}
            <div className={styles.inner_small}>
                <div className={styles.icon_small}>
                    <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.58331C0 2.45414 0.721698 3.16663 1.60377 3.16663H28.3962C29.2783 3.16663 30 2.45414 30 1.58331C30 0.712492 29.2783 0 28.3962 0H1.60377C0.721698 0 0 0.712492 0 1.58331ZM2.58779 19H9.00288C9.88496 19 10.6067 18.2875 10.6067 17.4167C10.6067 16.5459 9.88496 15.8334 9.00288 15.8334H2.58779C1.70572 15.8334 0.984018 16.5459 0.984018 17.4167C0.984018 18.2875 1.70572 19 2.58779 19ZM18.2809 11.0833H2.24314C1.36107 11.0833 0.639371 10.3708 0.639371 9.49998C0.639371 8.62916 1.36107 7.91666 2.24314 7.91666H18.2809C19.163 7.91666 19.8847 8.62916 19.8847 9.49998C19.8847 10.3708 19.163 11.0833 18.2809 11.0833Z" fill="#656565" />
                    </svg>

                </div>

                <div className={styles.image}>
                    <Image src={logo} alt="logo" layout='fill' objectFit='contain' />
                </div>

                <button className={styles.button}>Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar;