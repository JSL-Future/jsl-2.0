import React, { Fragment } from 'react'
import moment from 'moment'
import Modais from '../Modais'

import SkeletonContent from './Skeleton'
import GoBackIcon from './arrowBack.svg'
import RiskIcon from './risk.svg'
import HighRiskIcon from './highRisk.svg'
import LossRiskIcon from './lossRisk.svg'
import styles from './style.module.css'

const iconRisk = {
  Normal: RiskIcon,
  Alto: HighRiskIcon,
  Baixo: LossRiskIcon,
}

const formattedDate = date => moment(date).format('DD/MMM - HH:mm')

const Details = ({
  backPage,
  data,
  loading,
  showModal,
  openModal,
  closeModal,
  modalType,
  handleSave,
  form,
  formErrors,
  handleOnChange,
  HandleBlur,
}) => {
  const diff = (createdAt, updatedAt, status) => {
    const start = moment(createdAt)
    const end = status === 'check-in' ? moment() : moment(updatedAt)
    const diff = end.diff(start)
    const diffTime = moment.utc(diff).format('HH:mm')
    return diffTime
  }
  const riskLevel = data.priority ? data.priority : 'Normal'
  const formType = data.reason === 'abastecer' ? 'suply' : 'event'
  const countHoursTotal = diff(data.createdAt, data.updatedAt, data.status)
  return (
    <div className={styles.containerDetail}>
      <div className={styles.goBack}>
        <button className={styles.gobackBtn} onClick={backPage}>
          <img src={GoBackIcon} alt="go back" />
        </button>
      </div>
      <Modais
        type={modalType}
        showModal={showModal}
        closeModal={closeModal}
        handleSave={handleSave}
        form={form}
        formErrors={formErrors}
        handleOnChange={handleOnChange}
        HandleBlur={HandleBlur}
      />
      {loading && <SkeletonContent />}
      {!loading && (
        <Fragment>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Detalhes
            </h1>
            <div className={styles.implementInfo}>
              <h3>Motivo</h3>
              <h2>{data.reason}</h2>
            </div>
            <div className={styles.implementInfo2}>
              <h3>Placa</h3>
              <h2>{data.plate}</h2>
            </div>
            <div className={styles.implementInfo3}>
              <h3>Frota</h3>
              <h2>{data.fleet}</h2>
            </div>
            <div className={styles.implementInfo}>
              <h3>Permanência</h3>
              <h2>{countHoursTotal}</h2>
            </div>
            <div className={styles.implementInfo2}>
              <h3>Status</h3>
              <h2>{data.status}</h2>
            </div>
            <div className={styles.implementInfo3}>
              <h3>Operação</h3>
              <h2>{data.operation}</h2>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <h1 className={styles.smallTitle}>
                Eventos
              </h1>
              <button className={styles.btnCircleRed} onClick={() => openModal(formType)}>Adicionar <strong>+</strong></button>
            </div>
            {data.implement_events && data.implement_events.map(({ id, status, createdAt }) => (
              <div key={id} className={styles.implementInfo}>
                <h3>{status}</h3>
                <h2>{formattedDate(createdAt)}</h2>
              </div>
            ))}
            <div className={styles.implementTotal}>
              <h3>Permanência total: <strong>{countHoursTotal}</strong></h3>
            </div>
          </div>
          <div className={styles.riskContent}>
            <div className={styles.riskHeader}>
              <h1 className={styles.smallTitle}>Prioridade</h1>
              <button className={styles.btnCircle} onClick={() => openModal('priority')}>Editar prioridade</button>
            </div>
            <div className={styles.risk}>
              <h4>Nível {riskLevel}</h4>
              <div className={styles.riskInfo}>
                <img src={iconRisk[riskLevel]} alt={riskLevel} />
                <p>
                  Na prioridade é possível controlar quais serviços
                  irão ser executados primeiro. A prioridade atual dessa
                  atividade é <strong> “{riskLevel}”</strong>.
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Details
