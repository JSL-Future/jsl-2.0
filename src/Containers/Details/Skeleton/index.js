import React from 'react'
import { Skeleton } from '../../../Components'
import styles from './style.module.css'

const SkeletonContent = () => (
  <div style={{ width: '100%'}}>
    <div className={styles.skeletonContent}>
      <Skeleton height="20px" width="30%" borderRadius="3px" margin="20px 0" />
      {[100, 100, 30].map((item, index) => (
        <Skeleton
          key={index}
          height="20px"
          width={`${item}%`}
          margin="5px 0"
          borderRadius="3px"
        />
      ))}
    </div>

    <div className={styles.skeletonContent}>
      <div className={styles.skeletonDetailHeader}>
        <Skeleton height="20px" width="30%" borderRadius="3px" margin="20px 0" />
        <Skeleton height="20px" width="40%" borderRadius="20px" margin="20px 0" />
      </div>
      {[100, 100, 30].map((item, index) => (
        <Skeleton
          key={index}
          height="20px"
          width={`${item}%`}
          margin="15px 0"
          borderRadius="3px"
        />
      ))}
    </div>

    <div className={styles.skeletonContentPadding}>
      <div className={styles.skeletonDetailHeader}>
        <Skeleton height="20px" width="30%" borderRadius="3px" margin="20px 0" />
        <Skeleton height="20px" width="40%" borderRadius="20px" margin="20px 0" />
      </div>
      {[100, 100, 30].map((item, index) => (
        <Skeleton
          key={index}
          height="20px"
          width={`${item}%`}
          margin="5px 0"
          borderRadius="3px"
        />
      ))}
    </div>
  </div>
)

export default SkeletonContent
