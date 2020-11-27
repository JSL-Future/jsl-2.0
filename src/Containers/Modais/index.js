import React from 'react'
import { Modal } from '../../Components'
import AddEvents from './AddEvents'
import Priority from './Priority'
import Suply from './Supply'
import CloseIcon from './closed.svg'
import styles from './style.module.css'

const checkModalType = type => {
  if (type === 'abastecer') {
    return Suply
  }

  if(type === 'priority') {
    return Priority
  }

  return AddEvents
}

const Modais = ({
  showModal,
  closeModal,
  type,
  handleSave,
  form,
  formErrors,
  handleOnChange,
  HandleBlur,
}) => {
  const Component = checkModalType(type)
  return (
    <Modal show={showModal}>
      <div className={styles.header}>
        <div
          onClick={closeModal}
          role="button"
          className={styles.closeBtn}
        >
          <img src={CloseIcon} alt="close modal" />
        </div>
      </div>
      <Component
        handleSave={handleSave}
        form={form}
        formErrors={formErrors}
        handleOnChange={handleOnChange}
        HandleBlur={HandleBlur}
      />
    </Modal>
  )
}

export default Modais
