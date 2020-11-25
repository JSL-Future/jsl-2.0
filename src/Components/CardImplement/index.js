import React from 'react'
import styles from './style.module.css'
import moment from 'moment'

import CareIcon from './care.svg'
import FixIcon from './fix.svg'
import GasIcon from './gas.svg'
import ParkingIcon from './parking.svg'
import WashIcon from './wash.svg'

const Icon = ({ reason }) => {
  const iconPath = {
    Corretiva: FixIcon,
    Preventiva: CareIcon,
    Estacionamento: ParkingIcon,
    Abastecer: GasIcon,
    Lavar: WashIcon,
  }

  return (
    <img src={iconPath[reason]} alt={reason} />
  )
}

const CardImplement = ({
  createdAt,
  id,
  plate,
  updatedAt,
  reason,
  status,
  fleet,
  goToDetail,
}) => {

  const diff = (createdAt, updatedAt, status) => {
    const start = moment(createdAt)
    const end = status === 'check-in' ? moment() : moment(updatedAt)
    const diff = end.diff(start)
    const diffTime = moment.utc(diff).format('HH:mm')
    return diffTime
  }

  return (
    <div
      className={styles.card}
      onClick={() => goToDetail(id)}
      role="button"
    >
      <div className={styles.cardContentImage}>
        <Icon reason={reason} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardContentItem}>
          <h3>Motivo</h3>
          <h2>{reason}</h2>
        </div>
        <div className={styles.cardContentItem}>
          <h3>Placa</h3>
          <h2>{plate}</h2>
        </div>
        <div className={styles.cardContentItem}>
          <h3>Frota</h3>
          <h2>{fleet}</h2>
        </div>
        <div className={styles.cardContentItem}>
          <h3>Permanência</h3>
          <h2>{diff(createdAt, updatedAt, status)}</h2>
        </div>
        <div className={styles.cardContentItem}>
          <h3>Status</h3>
          <h2>{status}</h2>
        </div>
        <div className={styles.cardContentItem}>
          <h3>Prioridade</h3>
          <h2>Normal</h2>
        </div>
      </div>
    </div>
  )
}

export default CardImplement
