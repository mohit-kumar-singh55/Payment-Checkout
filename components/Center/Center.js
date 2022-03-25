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
                    <div className={styles.image_container}>
                        <Image src={card1} alt="card" layout='fill' objectFit='contain' />
                    </div>
                    <div className={styles.image_container}>
                        <Image src={card2} alt="card" layout='fill' objectFit='contain' />
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