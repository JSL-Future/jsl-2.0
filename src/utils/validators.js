import { isEmpty, isNil }  from 'ramda'

const replaceMask = (value = '') =>  value.replace(/[^a-z0-9]/gi,'')

const cpfValidator = value => {
  if (replaceMask(value).toString().length < 11) {
    return 'Documento inválido!'
  }
  return null
}

const EmptyField = ({ value, name }) => {
  if (isEmpty(value) || isNil(value)) {
    return 'Este campo é obrigatório!'
  }

  if (name === 'document') {
    return cpfValidator(value)
  }

  return null
}

const validationForm = data => {
  let errors = {}
  for(let key in data) {
    if(isEmpty(data[key]) || isNil(data[key])) {
      errors = {...errors, [key]: 'Este Campo é obrigatório' }
    }
  }

  return errors
}

export {
  EmptyField,
  validationForm,
  replaceMask,
}
