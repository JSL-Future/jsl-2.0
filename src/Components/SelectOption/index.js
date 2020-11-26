import React from 'react'
import classNames from 'classnames'
import Style from './style.module.css'

const selectOption = ({
  formErrors,
  options,
  selectValue,
  selectName,
  label,
  onchange,
}) => {
  return (
    <label className={classNames(Style.label, {
      [Style.labelError]: formErrors && formErrors[selectName]
    })}>
      {label}
      <select
        className={classNames(Style.selectOptions, {
          [Style.SelectError]: formErrors && formErrors[selectName]
        })}
        value={selectValue}
        name={selectName}
        onChange={onchange}
      >
        {
          options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              hidden={option.hidden}
              disabled={option.disabled}
            >
              {option.name}
            </option>
          )
          )
        }
      </select>
      <small className={Style.errorMessage}>
        {formErrors && formErrors[selectName]}
      </small>
    </label>
  )
}

export default selectOption
