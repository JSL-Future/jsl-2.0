import React from 'react'
import Create from './Containers/Create'

const App = () => {

  const listSelectEvent = [
    {value: "", hidden: true, disabled: false, name: "Selecione uma opção"},
    {value: "0", hidden: false, disabled: false, name: "Preventiva"},
    {value: "1", hidden: false, disabled: false, name: "Corretiva"},
    {value: "2", hidden: false, disabled: false, name: "Estacionamento"},
  ]

  const listSelectOper = [
    {value: "", hidden: true, disabled: false, name: "Selecione uma opção"},
    {value: "0", hidden: false, disabled: false, name: "Mercedes-Benz"},
    {value: "1", hidden: false, disabled: false, name: "Ford Motor"},
    {value: "2", hidden: false, disabled: false, name: "GM Interplantas"},
    {value: "2", hidden: false, disabled: false, name: "GM Cegonha"},
    {value: "2", hidden: false, disabled: false, name: "Lear Corporation"},
  ]

  return (
    <Create dataListOper={listSelectEvent} dataListEvent={listSelectOper} />
  )
}

export default App
