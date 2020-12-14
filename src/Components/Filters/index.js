import React, { Fragment, useEffect, useCallback, useState } from 'react'
import styles from './style.module.css'
import {
  Button,
  Input,
  RadioButton,
  SelectOption,
} from '../'
import {
  FiltersPriority,
  FiltersStatus,
  FiltersService,
  dataListOper,
} from '../../utils/common'
import CloseIcon from './closed-white.svg'

const Filters = (
  closedModal,
) => {
  const renderRadioButton =  item => (
    <div
      key={item.children}
      className={(
        item.name === 'priority'
          ? ''
          : styles.radioButtonItem
      )}
    >
      <RadioButton
        id={item.id}
        name={item.name}
        onchange={onChange}
        value={item.children}
      />
    </div>
  )
  const [form, setForm] = useState({
    plate: '',
    dateInitial: '',
    dateEnd: '',
    operation: '',
    priority: '',
    service: '',
    status: '',
  })

  const onChange = useCallback(({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })    
  }, [form])

  useEffect(() => {
    console.log(form)
    console.log('Component: ', typeof(onChange))
  })

  return (
    <Fragment>
      <div className={styles.header}>
        <div
          onClick={closedModal}
          role="button"
          className={styles.closeBtn}
        >
          <img src={CloseIcon} alt="close modal" />
        </div>
        <h1>Filtros</h1>
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.plateFilter}>
          <Input
            value={form.plate}
            label="Placa"
            type="text"
            name="plate"
            id="textPlate"
            onchange={onChange}
          />
        </div>

        <div className={styles.periodFilter}>
          <div className={styles.periodFilterItem}>
            <Input
              value={form.dateInitial}
              label="Data inícial"
              type="text"
              name="dateInitial"
              id="textDateInitial"
              onchange={onChange}
              mask="11/11/1111"
            />
          </div>
          <div className={styles.periodFilterItem}>
            <Input
              value={form.dateEnd}
              label="Data fim"
              type="text"
              name="dateEnd"
              id="textDateEnd"
              onchange={onChange}
              mask="11/11/1111"
            />
          </div>
        </div>

        <div className={styles.operationFilter}>
          <SelectOption
            label="Operação"
            selectValue={form.operation}
            selectName="operation"
            onchange={onChange}
            options={dataListOper}
          />
        </div>

        <div className={styles.radioButtonFilterContainer}>
          <h4 className={styles.filtersTitle}>Prioridade</h4>
          {FiltersPriority.map(renderRadioButton)}
        </div>

        <div className={styles.radioButtonFilterContainer}>
          <h4 className={styles.filtersTitle}>Serviço</h4>
          {FiltersService.map(renderRadioButton)}
        </div>

        <div className={styles.radioButtonFilterContainer}>
          <h4 className={styles.filtersTitle}>Status</h4>
          {FiltersStatus.map(renderRadioButton)}
        </div>

        <div className={styles.actionFilters}>
          <div className={styles.actionFilterItem}>
            <Button action={() => console.log('limpar')} outline>
              Limpar filtros
            </Button>
          </div>
          <div className={styles.actionFilterItem}>
            <Button action={() => console.log('Aplicar')}>
              Aplicar
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Filters
