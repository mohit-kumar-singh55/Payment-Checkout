import Image from 'next/image';
import React from 'react';
import styles from "./Sidebar.module.css";
import user from "../../public/assests/user.png";
import uk from "../../public/assests/uk-svg.svg";
import { AcademicCapIcon } from "@heroicons/react/outline";

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>ORDER SUMMARY <small>Edit</small></h2>

            <div className={styles.main_container}>
                <div className={styles.main}>
                    {/* Card */}
                    <div className={styles.card}>
                        <div className={styles.image_container}>
                            <Image src={user} alt="user" layout='fill' objectFit='contain' />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.name_details}>
                                <p>ELLA . H</p>

                                {/* Check */}
                                <svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.6587 3.41101C12.13 2.72986 10.4221 2.56112 8.78965 2.92995C7.15723 3.29877 5.68776 4.1854 4.6004 5.4576C3.51305 6.72981 2.86607 8.31942 2.75595 9.98936C2.64584 11.6593 3.07849 13.3201 3.98938 14.7241C4.90027 16.128 6.24059 17.1999 7.81045 17.7799C9.38031 18.3599 11.0956 18.4169 12.7005 17.9424C14.3054 17.4679 15.7139 16.4873 16.7159 15.1469C17.718 13.8064 18.2599 12.178 18.2609 10.5044V9.66522C18.2609 8.90883 18.874 8.29566 19.6304 8.29566C20.3868 8.29566 21 8.90883 21 9.66522V10.5052C20.9987 12.7695 20.2655 14.9734 18.9098 16.7869C17.5541 18.6004 15.6484 19.9271 13.4771 20.5691C11.3058 21.2111 8.98512 21.134 6.86119 20.3493C4.73726 19.5646 2.92389 18.1144 1.69151 16.2149C0.459129 14.3154 -0.126219 12.0685 0.0227606 9.80914C0.171741 7.5498 1.04707 5.39915 2.51819 3.67794C3.98932 1.95672 5.97742 0.757161 8.186 0.258163C10.3946 -0.240835 12.7053 -0.0125362 14.7735 0.90901C15.4644 1.21686 15.7749 2.02651 15.4671 2.71742C15.1592 3.40833 14.3496 3.71886 13.6587 3.41101Z" fill="#03CD0B" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.6151 2.40474C21.1279 2.94478 21.1283 3.8208 20.616 4.36138L11.866 13.5943C11.6199 13.854 11.286 13.9999 10.9378 14C10.5896 14.0001 10.2556 13.8543 10.0094 13.5948L7.38442 10.8277C6.87186 10.2874 6.87186 9.41134 7.38442 8.87103C7.89699 8.33072 8.72801 8.33072 9.24058 8.87103L10.937 10.6593L18.759 2.40572C19.2713 1.86514 20.1023 1.8647 20.6151 2.40474Z" fill="#03CD0B" />
                                </svg>

                                {/* Country */}
                                <div className={styles.country_image}>
                                    <Image src={uk} alt="country" layout='fill' objectFit='contain' />
                                </div>
                            </div>
                            <div className={styles.icon_language}>
                                <AcademicCapIcon /><small>English</small>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    {/* Date Time */}
                    <div className={styles.date_container}>
                        <p>Date and Time</p>
                        <h4>Friday, February 4, 18:30</h4>
                        <small>GMT +5:30</small>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Coupon */}
                <div className={styles.coupon}>
                    <p>Apply Coupon</p>
                    <input type="text" />
                </div>

                <div className={styles.divider} />

                {/* services */}
                <div className={styles.service_container}>
                    <div className={styles.service_heading}>
                        <p>Service details</p>
                        <p className={styles.service_price}>Price per hour</p>
                    </div>
                    <div className={styles.service_items}>
                        <p>1 hour lesson</p>
                        <p className={styles.service_price}>&#x20b9;3,000.80</p>
                    </div>
                    <div className={styles.service_items}>
                        <p>Transaction fee</p>
                        <p className={styles.service_price}>&#x20b9;22.51</p>
                    </div>
                    <div className={styles.service_items}>
                        <p>Lesson cancellation</p>
                        <p className={styles.service_free}>Free</p>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* total */}
                <div className={styles.total}>
                    <p>Total</p>
                    <p className={styles.total_price}>Rs: 3496.00</p>
                </div>

                {/* Free Lesson */}
                <div className={styles.free_lesson_container}>
                    <input type="checkbox" id="free_lesson" />
                    <label htmlFor="free_lesson">I want a <span className={styles.service_free}>free lesson</span> or a refund if the tutor doesn&apos;t meet my needs</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar