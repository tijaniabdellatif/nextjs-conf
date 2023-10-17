import React from "react";
import styles from './styles.module.scss';
import {MdSecurity} from 'react-icons/md';
import {AiOutlineHeart} from 'react-icons/ai';
import {GrServices} from 'react-icons/gr';
import {BiHelpCircle,BiSupport} from 'react-icons/bi';
import {RiAccountPinCircleLine, RiArrowDropDownFill} from "react-icons/ri";
import { ImageComponent } from "../ImageComponent";
export function TopHeader(){

    return(<div className={styles.top}> 
        <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li>
                        <ImageComponent path="/images/moro.png" alt="morrocan flag" width="20" height="20" />
                         <span>Morroco / MAD</span> 
                    </li>
                    <li>
                       <MdSecurity /> 
                       <span>Buyer Protection and Recommandations</span> 
                    </li>
                    <li>
                        <GrServices /> 
                        <span>Customer Service</span>
                    </li>
                    <li>
                        <BiHelpCircle /> 
                        <span>FAQ / Help</span>
                    </li>
                    <li>
                        <BiSupport />
                        <span>Customer Support</span>
                    </li>
                    <li>
                        <AiOutlineHeart /> 
                        <span>WhishList</span>
                    </li>

                    <li> 
                        <div className={styles.flex}>
                             <RiAccountPinCircleLine />
                             <span>Account</span>
                             <RiArrowDropDownFill />
                        </div>
                    </li>
                </ul>
        </div>
    </div>)
}