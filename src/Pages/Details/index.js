import React, { useEffect, useState } from 'react'
import { isEmpty, omit } from 'ramda'
import { withRouter } from 'react-router-dom'
import DetailsContainer from '../../Containers/Details'
import ImplementService from '../../services/implement'
import {
  EmptyField,
  validationForm,
} from '../../utils/validators'

const suplyForm = {
  fuel: '',
  mileage: '',
  pedometer: '',
  registrationDriver: '',
  totalLiters: '',
}

const EventForm = {
  responsible: '',
  status: '',
}

const PriorityForm = {
  priority: '',
}

const formSetting = {
  event: EventForm,
  priority: PriorityForm,
  abastecer: suplyForm,
}

const Details = (props) => {
  const [implement, setImplement] = useState({
    active: false,
    createdAt: '',
    fleet: '',
    id: '',
    implement_events: [],
    operation: '',
    plate: '',
    reason: '',
    status: '',
    updatedAt: '',
  })


  const [shouldRequest, setShouldRequest] = useState(true)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('event')
  const [form, setForm] = useState(formSetting[modalType])
  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    const { id } = props.match.params
    if(shouldRequest) {
      ImplementService.getImplementById(id)
        .then(response => {
          setImplement(response.data)
          setShouldRequest(false)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
  })

  const goToManager = () => {
    return props.history.push('/manager')
  }

  const closeModal = () => setShowModal(false)

  const openModal = (type) => {
    setForm(formSetting[type])
    setModalType(type)
    setShowModal(true)
  }

  const goToSuccess = routeComplement => props.history.push(`/${routeComplement}/success`)
  const changePriority = () => {
    try {
      console.log('Alterar prioridade', form)
      goToSuccess('priority')
    } catch (error) {

    }
  }

  const createEvent = () => {
    try {
      console.log('Criar evento', form)
      goToSuccess('event')
    } catch (error) {

    }
  }

  const beginSuply = () => {
    try {
      console.log('Iniciar abastecimento', form)
      goToSuccess('suply')
    } catch (error) {

    }
  }

  const checkType = type => {
    if (type === 'abastecer') {
      return beginSuply
    }

    if(type === 'priority') {
      return changePriority
    }

    return createEvent
  }

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

  const handleSave = () => {
    const action = checkType(modalType)
    const errors = validationForm(form)
    setFormErrors(errors)
    return isEmpty(errors) && action(form)
  }

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    HandleBlur({ target })
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <DetailsContainer
      data={implement}
      backPage={goToManager}
      loading={loading}
      showModal={showModal}
      openModal={openModal}
      closeModal={closeModal}
      modalType={modalType}
      handleSave={handleSave}
      form={form}
      handleOnChange={handleOnChange}
      HandleBlur={HandleBlur}
      formErrors={formErrors}
    />
  )
}

export default withRouter(Details)
