import React from 'react'
import { withRouter } from 'react-router-dom'

import styles from './style.module.css'
import HomeIcon from './home.svg'
import PlusIcon from './plus.svg'
import ProfileIcon from './profile.svg'

const Menu = ({
  history,
}) => {
  const goToCreate = () => history.push('/create')
  const goToManager = () => history.push('/manager')
  const goToProfile = () => history.push('/profile')

  return (
    <div className={styles.menu}>
      <button
        onClick={goToManager}
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
        onClick={goToProfile}
        className={styles.menuItem}
        type="button"
      >
        <div className={styles.menuIcon}>
          <img src={ProfileIcon} alt="profile" />
        </div>
        <span className={styles.menuItemText}>Perfil</span>
      </button>
    </div>
  )
}

export default withRouter(Menu)
