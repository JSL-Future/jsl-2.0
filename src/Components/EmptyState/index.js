import React from 'react'
import Styles from './style.module.css'
import NoDataIcon from './no-data.svg'
import doneCheckIcon from './done-check.svg'

const EmptyState = ({
  type,
}) => (
  <div className={Styles.emptyStateManager}>
    <img src={type === 'Todos' ? NoDataIcon : doneCheckIcon} />
    <h3>{(
      type === 'Todos'
        ? 'Nenhuma Atividade encontrada!'
        : `Nenhuma atividade do tipo "${type.toLowerCase()}" encontrada!`
    )}</h3>
    <p>Clique no botão de "<b>+</b>" abaixo para criar uma atividade.</p>
  </div>
)

export default EmptyState
