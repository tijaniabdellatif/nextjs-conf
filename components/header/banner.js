import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Banner = () => {
  return (
   <Link href="/browse">
       <div className={styles.banner}>
            Banner
       </div>
   </Link>
  )
}


