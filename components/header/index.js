import { Banner } from './banner';
import {TopHeader} from "./TopHeader";
import styles from './styles.module.scss';

export default function Header(){

    return(<header className={styles.header}>
            <Banner />
            <TopHeader />
    </header>)
}