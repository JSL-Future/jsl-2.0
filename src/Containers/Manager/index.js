import React from 'react'
import { Button, Card, EmptyState, Header, Table } from '../../Components'
import style from './style.module.css'

const Manager = () => {

  const lineTable = [
    {placa: "DSG2100", date: "03/11/1990", event:"Preventiva"},
    {placa: "DSG2100", date: "03/11/1990", event:"Corretiva"},
    {placa: "DSG2100", date: "03/11/1990", event:"Estacionamento"},
  ]

  if (lineTable.length > 0) {
    return (
      <div className={style.container}>
        <Header />
        <Card className={style.cardAdd}>
          <h1>Gerenciamento de implementos</h1>
          <p>Adicione um novo implemento para a gestão da entrada e saída em cada operação</p>
          <Button action="" outline>
            Adicionar
          </Button>
        </Card>
        <Card>
          <Table line={lineTable} />
        </Card>
      </div>
    )
  } else {
    return (
      <div className={style.container}>
        <Header />
        <Card className={style.cardAdd}>
          <h1>Gerenciamento de implementos</h1>
          <p>Adicione um novo implemento para a gestão da entrada e saída em cada operação</p>
          <Button action="" outline>
            Adicionar
          </Button>
        </Card>
        <Card>
          <EmptyState
            title="Não temos nenhum implemento criado"
            description="Para adicionar um novo implmento clique em 
            “Adicionar” na parte superior!"
          />
        </Card>
      </div>
    )
  }
}

export default Manager
