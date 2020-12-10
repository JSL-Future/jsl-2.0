import React, { Fragment } from 'react'
import {
  Button,
  CardImplement,
  CardSkeleton,
  EmptyStateManager,
} from '../../Components'
import FilterModal from '../FilterModal'

import Styles from './style.module.css'

const items = [1, 2, 3, 4, 5, 6, 7]
const Manager = ({
  data,
  filterSelected,
  goToDetail,
  HandleFilter,
  loading,
  statusTranslate,
  priorityTranslate,
}) => {
  const renderCardImplement = implement => (
   <div
    className={Styles.implementItem}
    key={implement.id}
  >
    <CardImplement
        goToDetail={goToDetail}
        {...implement}
        statusTranslate={statusTranslate}
        priorityTranslate={priorityTranslate}
      />
   </div>
  )
  return (
    <Fragment>
      <div className={Styles.header}>
        <h1>Gerenciamento</h1>
      </div>
      <Button action={() => console.log('abrir modal filtro')}>Abrir Modal Filtro</Button>
      <FilterModal />
      <div className={Styles.container}>
        {data.length === 0 && !loading && <EmptyStateManager type={filterSelected} />}
        {loading && items.map(item => (
          <div className={Styles.implementItem} key={item} >
            <CardSkeleton />
          </div>)
        )}

        {data.map(renderCardImplement)}
      </div>
    </Fragment>
  )
}

export default Manager
