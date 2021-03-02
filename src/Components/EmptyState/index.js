import React from 'react'
import Styles from './style.module.css'
import NoDataIcon from './no-data.svg'

const EmptyState = () => (
  <div className={Styles.emptyStateManager}>
    <img src={NoDataIcon} alt="empty state" />
    <h3>Nenhuma Atividade encontrada!</h3>
    <p>Clique no botão de "<b>+</b>" abaixo para criar uma atividade.</p>
  </div>
)

export default EmptyState
