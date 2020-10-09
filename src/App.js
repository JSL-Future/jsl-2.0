import React from 'react'
import Button from './Components/Button'

const App = () => {
  const save = () => {
    console.log('Dados salvos!')
  }

  const remove = () => {
    console.log('Dados excluidos!')
  }

  const change = () => {
    console.log('Dados alterados!')
  }

  return (
    <div>
      <Button action={save} outline >Salvar</Button>
      <Button action={remove}>Deletar</Button>
      <Button action={change}>Alterar</Button>
    </div>
  )
} 

export default App
