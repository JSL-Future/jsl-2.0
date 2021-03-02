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

const Filters = ({
  closeModal,
  handleFilter,
  form,
  onChange,
  clearFilters,
}) => {
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
        actived={item.children === form[item.name]}
      />
    </div>
  )

  return (
    <Fragment>
      <div className={styles.header}>
        <div
          onClick={clearFilters}
          role="button"
          className={styles.closeBtn}
        >
          <img src={CloseIcon} alt="close modal" />
        </div>
        <h1>Filtrar</h1>
        <p style={{ 
          width: '100%',
          paddingLeft: '54px',
          margin: 0, 
        }}>
          Busque pela placa, serviços, status, e muito mais!
        </p>
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

        {/* <div className={styles.periodFilter}>
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
        </div> */}

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
            <Button action={clearFilters} outline>
              Limpar filtros
            </Button>
          </div>
          <div className={styles.actionFilterItem}>
            <Button action={handleFilter}>
              Aplicar
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Filters
