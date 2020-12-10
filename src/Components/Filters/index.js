import React, { Fragment } from 'react'
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
      name={item.name}
      value={item.children}
    />
  </div>
)

const Filters = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <div
          onClick={() => console.log('Fechar Modal')}
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
            value=""
            label="Placa"
            type="number"
            name="pedometer"
            id="textPedometer"
            onchange={value => console.log(value)}
          />
        </div>

        <div className={styles.periodFilter}>
          <div className={styles.periodFilterItem}>
            <Input
              value=""
              label="Data inícial"
              type="number"
              name="pedometer"
              id="textPedometer"
              onchange={value => console.log(value)}
              placeholder="Data início"
              mask="11/11/1111"
            />
          </div>
          <div className={styles.periodFilterItem}>
            <Input
              label="Data fim"
              value=""
              type="number"
              name="pedometer"
              id="textPedometer"
              onchange={value => console.log(value)}
              placeholder="Data fim"
              mask="11/11/1111"
            />
          </div>
        </div>

        <div className={styles.operationFilter}>
          <SelectOption
            label="Operação"
            selectValue=""
            selectName="operation"
            onchange={value => console.log(value)}
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
