import React from 'react';
import styles from "./Navbar.module.css";
import Image from 'next/image';
import { SearchIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/solid";
import logo from "../../public/assests/Group 218.png";

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
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.6667 22L18.3334 22" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M36.6667 11L7.33337 11" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M36.6667 33L29.3334 33" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <p className={styles.login}>Log In</p>

                    <button className={styles.button}>Sign In</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;