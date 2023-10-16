import { Banner } from './banner';
import styles from './styles.module.scss';

export default function Header(){

    return(<header className={styles.header}>
            <Banner />
    </header>)
}