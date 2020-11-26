import React from 'react'
import styles from './style.module.css'

const Skeleton = ({
  height,
  width,
  borderRadius,
  margin,
}) => (
  <div
    className={styles.skeleton}
    style={{
      height,
      width,
      borderRadius,
      margin,
    }}
  />
)

export default Skeleton
