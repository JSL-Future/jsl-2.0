import React, { Fragment } from 'react'
import styles from './style.module.css'
import HomeIcon from './home.svg'
import PlusIcon from './plus.svg'
import ProfileIcon from './profile.svg'

const Menu = ({
  children,
  goToCreate,
}) => {
  return (
    <Fragment>
      {children}
      <div className={styles.menu}>
        <button
          className={styles.menuItem}
          type="button"
        >
          <div className={styles.menuIcon}>
            <img src={HomeIcon} alt="home" />
          </div>
          <span className={styles.menuItemText}>Home</span>
        </button>
        <button
          onClick={goToCreate}
          className={styles.menuItemPlus}
          type="button"
        >
          <div className={styles.menuIconPlus}>
            <img src={PlusIcon} alt="plus" />
          </div>
        </button>
        <button
          className={styles.menuItem}
          type="button"
        >
          <div className={styles.menuIcon}>
            <img src={ProfileIcon} alt="profile" />
          </div>
          <span className={styles.menuItemText}>Perfil</span>
        </button>
      </div>
    </Fragment>
  )
}

export default Menu
