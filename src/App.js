import React from 'react'
import SelectOption from './Components/SelectOption'

const App = () => {

  const options = [
    {name: "Selecione", value: "", hidden: true, disabled: false},
    {name: "Preventiva", value: "", hidden: false, disabled: true},
    {name: "Corretiva", value: "", hidden: false, disabled: false},
    {name: "Estacionamento", value: "", hidden: false, disabled: false}
  ]

  return(
    <SelectOption options={options}/>
  )
} 

export default App
