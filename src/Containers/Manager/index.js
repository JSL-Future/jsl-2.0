import React from 'react'
import { Button, Card, EmptyState, Header, Table } from '../../Components'
import style from './style.module.css'

const Manager = (props) => {
  return (
    <div className={style.container}>
      <Header />
      <Card>
        <h1>Gerenciamento de implementos</h1>
        <p>Adicione um novo implemento para a gestão da entrada e saída em cada operação</p>
        <Button action={props.addImplement} outline>
          Adicionar
        </Button>
      </Card>
      <Card>
        {props.data.length > 0 
          ? (
            <Table data={props.data} />
          )
          : (
            <EmptyState
              title="Não temos nenhum implemento criado"
              description="Para adicionar um novo implmento clique em 
              “Adicionar” na parte superior!"
            />
          )
        }
      </Card>
    </div>
  )
}

export default Manager
