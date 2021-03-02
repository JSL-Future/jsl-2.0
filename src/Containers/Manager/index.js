import React, { Fragment } from 'react'
import {
  CardImplement,
  CardSkeleton,
  EmptyStateManager,
} from '../../Components'
import FilterModal from '../FilterModal'
import SearchSvg from './search.svg'
import Styles from './style.module.css'

const items = [1, 2, 3, 4, 5, 6, 7]
const Manager = ({
  data,
  goToDetail,
  handleFilter,
  loading,
  statusTranslate,
  priorityTranslate,
  showModal,
  handleShowModal,
  form,
  onChange,
  clearFilters,
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
      {
        data.length > 0 && (
          <button className={Styles.filterAction} onClick={handleShowModal}>
            <img src={SearchSvg} alt="search" />
            Filtrar
          </button>
        )
      }
      <FilterModal
        showModal={showModal}
        handleFilter={handleFilter}
        handleShowModal={handleShowModal}
        form={form}
        onChange={onChange}
        clearFilters={clearFilters}
      />
      <div className={Styles.container}>
        {data.length === 0 && !loading && <EmptyStateManager />}
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
