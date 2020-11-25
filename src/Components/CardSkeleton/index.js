import React from 'react'
import styles from './style.module.css'

const CardSkeleton = () => (
  <div className={styles.card}>
    <div className={styles.skeletonRectangle} />
    <div className={styles.skeletonTitle} />
    <div className={styles.skeletonContent} />
    <div className={styles.skeletonContent} />
  </div>
)

export default CardSkeleton
