import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { isEmpty, omit } from 'ramda'

import {
  EmptyField,
  validationForm,
} from '../../utils/validators'

import CreateContainer from '../../Containers/Create'
import ImplementService from '../../services/implement'

const Create = (props) => {
  const [form, setForm] = useState({
    operation: '',
    reason: '',
    plate: '',
    fleet: '',
    responsible: '',
  })
  const [formErrors, setFormErrors] = useState({})

  const HandleBlur = ({ target }) => {
    const message = EmptyField(target)
    if (message) {
      return setFormErrors({
        ...formErrors,
        [target.name]: message
      })
    }

    return setFormErrors(omit([target.name], formErrors))
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    HandleBlur({ target })
    setForm({
      ...form,
      [name]: value,
    })
  }

  const createImplement = async () => {
    const {
      responsible,
      reason,
      plate,
      fleet,
      operation,
    } = form

    try {
      await ImplementService.saveImplement({
        operation,
        plate,
        fleet,
        responsible,
        reason,
      })
      props.history.push('/manager')
    } catch (error) {
      alert('Error ao cadastrar!')
    }
  }

  const handleSave = () => {
    const errors = validationForm(form)
    setFormErrors(errors)
    return isEmpty(errors) && createImplement(form)
  }

  const goBack = () => props.history.push('/manager')

  return (
    <CreateContainer
      form={form}
      onChange={handleChange}
      handleSave={handleSave}
      goBack={goBack}
      HandleBlur={HandleBlur}
      formErrors={formErrors}
    />
  )
}

export default withRouter(Create)
