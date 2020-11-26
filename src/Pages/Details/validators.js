import { isEmpty, isNil }  from 'ramda'

const EmptyField = ({ value }) => {
  if (isEmpty(value) || isNil(value)) {
    return 'Este campo é obrigatório!'
  }

  return null
}

const validationForm = data => {
  let errors = {}
  for(let key in data) {
    errors = {...errors, [key]: 'Este Campo é obrigatório' }
  }

  return errors
}

export {
  EmptyField,
  validationForm,
}
