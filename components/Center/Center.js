import React from 'react';
import styles from "./Center.module.css";
import Image from "next/image";
import card1 from "../../public/assests/card1.svg";
import card2 from "../../public/assests/card2.svg";
import Input from '../Input/Input';
import { ArrowLeftIcon } from "@heroicons/react/solid";

const Center = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <small>Personal Details</small>
                <small>Payment Section</small>
            </div>

            <div className={styles.main}>
                <h2 className={styles.main_heading}>PAYMENT SECTION</h2>
                <p className={styles.para}>SAVED CARDS <small>Edit</small></p>
                <div className={styles.images}>
                    <div className={styles.box1}>
                        <div className={styles.circle_1} />
                        <div className={styles.image_container}>
                            <span />
                            <div className={styles.box_para}>
                                <p>XXXX</p>
                                <p>4023</p>
                            </div>
                            <div className={styles.image_container_svg}>
                                <svg width="31" height="10" viewBox="0 0 31 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_66)">
                                        <path d="M20.2926 0.664673C18.1662 0.664673 16.266 1.69777 16.266 3.60651C16.266 5.79546 19.6361 5.94665 19.6361 7.04632C19.6361 7.50935 19.07 7.92383 18.1032 7.92383C16.731 7.92383 15.7055 7.34467 15.7055 7.34467L15.2667 9.2708C15.2667 9.2708 16.4481 9.76 18.0166 9.76C20.3414 9.76 22.1707 8.67618 22.1707 6.73481C22.1707 4.42178 18.7866 4.27509 18.7866 3.25441C18.7866 2.89169 19.2513 2.49427 20.2153 2.49427C21.3031 2.49427 22.1906 2.91547 22.1906 2.91547L22.62 1.05516C22.62 1.05516 21.6544 0.664673 20.2926 0.664673ZM0.838475 0.805074L0.786987 1.08588C0.786987 1.08588 1.68155 1.23934 2.48725 1.54547C3.52465 1.89651 3.59855 2.10086 3.77326 2.73558L5.67713 9.61522H8.22928L12.1611 0.805074H9.61476L7.08836 6.79514L6.05744 1.71768C5.96289 1.13657 5.484 0.805074 4.8978 0.805074H0.838475ZM13.185 0.805074L11.1875 9.61522H13.6156L15.606 0.805074H13.185ZM26.7273 0.805074C26.1418 0.805074 25.8316 1.09891 25.604 1.61238L22.0467 9.61522H24.5929L25.0856 8.28141H28.1877L28.4873 9.61522H30.734L28.774 0.805074H26.7273ZM27.0585 3.1853L27.8133 6.4913H25.7912L27.0585 3.1853Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_66">
                                            <rect width="29.977" height="9.12343" fill="white" transform="translate(0.771973 0.650635)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.circle_2} />
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.circle_3} />
                        <div className={styles.image_container}>
                            <span />
                            <div className={styles.box_para}>
                                <p>XXXX</p>
                                <p>4023</p>
                            </div>
                            <div className={styles.image_container_svg}>
                                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_68)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.80127 1.59493H14.7314V12.8502H8.80127V1.59493Z" fill="#FF8136" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.17794 7.22253C9.17794 9.50596 10.1902 11.5397 11.7665 12.8502C10.6136 13.8088 9.15911 14.3806 7.57812 14.3806C3.83536 14.3806 0.801392 11.1758 0.801392 7.22253C0.801392 3.26928 3.83536 0.0644512 7.57812 0.0644512C9.15911 0.0644512 10.6136 0.636303 11.7665 1.59489C10.1902 2.90561 9.17794 4.93911 9.17794 7.22253Z" fill="#EB001B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.5199 2.78703V3.0648H22.4512L22.3723 2.87372L22.2932 3.0648H22.2245V2.78703H22.2729V2.9966L22.3471 2.81586H22.3974L22.4715 2.997V2.78703H22.5199ZM22.0848 2.78703V3.01748H22.173V3.0644H21.9489V3.01748H22.0368V2.78703H22.0848ZM22.7315 7.22265C22.7315 3.2694 19.6974 0.0645704 15.9548 0.0645704C14.3738 0.0645704 12.9191 0.636421 11.7664 1.59501C13.3427 2.90553 14.355 4.93923 14.355 7.22265C14.355 9.50588 13.3427 11.5396 11.7664 12.8503C12.9191 13.8089 14.3738 14.3807 15.9548 14.3807C19.6974 14.3807 22.7315 11.1759 22.7315 7.22265Z" fill="#EDE51F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_68">
                                            <rect width="22.1569" height="14.3368" fill="white" transform="matrix(1 0 0 -1 0.80127 14.3807)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <div className={styles.circle_4} />
                    </div>
                </div>
                <p className={styles.para}>Other Payment Methods</p>
                <div className={styles.cards}>
                    <button>Credit/Debit Card</button>
                    <button>Net Banking</button>
                    <button>UPI</button>
                </div>

                {/* Imput Fields */}
                <form className={styles.input_container}>
                    <div className={styles.input_container_1}>
                        <Input label="Card Number" type='number' id='cardNo' placeholder='0000 0000 0000 0000' />
                        <Input label="Name On Card" type='text' id='name' placeholder='ENTER YOUR NAME' />
                    </div>
                    <div className={styles.input_container_2}>
                        <Input label="Expiry Date" type='text' id='date' placeholder='MM/YY' />
                        <Input label="CVV" type='number' id='cvv' placeholder='---' />
                    </div>
                </form>

                <div className={styles.divider} />

                <div className={styles.footer}>
                    <p className={styles.link}><ArrowLeftIcon /> Back To Personal Details</p>
                    <button className={styles.button}>MAKE PAYMENT</button>
                </div>
            </div>
        </div>
    )
}

export default Center;