import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import AllIcon from './all.svg'
import CareIcon from './care.svg'
import FixIcon from './fix.svg'
import GasIcon from './gas.svg'
import ParkingIcon from './parking.svg'
import WashIcon from './wash.svg'

const filtersSetting = [
  { name: 'Todos', path: AllIcon },
  { name: 'Corretiva', path: FixIcon },
  { name: 'Preventiva', path: CareIcon },
  { name: 'Abastecer', path: GasIcon },
  { name: 'Estacionar', path: ParkingIcon},
  { name: 'Lavar', path: WashIcon },
]

const Filters = ({
  filterSelected,
  HandleFilter,
}) => {
  return (
    <div className={styles.filtersContainer}>
      <h3>Filtros</h3>
      <div className={styles.filters}>
        {filtersSetting.map(({ name, path }) => (
          <div
            className={styles.filterItem}
            key={name}
            onClick={() => HandleFilter(name)}
            role="button"
          >
            <div className={
              classNames(
                styles.filterItemImage,
                { [styles.active]: filterSelected === name }
              )}>
              <img src={path} alt={name} />
            </div>
            <span className={
              classNames({
                [styles.activeText]: filterSelected === name }
            )}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
