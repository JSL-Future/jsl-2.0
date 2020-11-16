import React from 'react'
import {
  Button,
  Card,
  EmptyState,
  Header,
  Table,
} from '../../Components'
import Style from './style.module.css'

const Manager = (props) => {
  return (
    <div className={Style.container}>
      <Header />
      <Card>
        <div className={Style.cardAdd}>
          <div>
            <h1>Gerenciamento de implementos</h1>
            <p>Adicione um novo implemento para a gestão</p>
            <p>de entrada e saída em cada operação</p>
          </div>
          <div>
            <Button action={props.addImplement} outline >
              Adicionar
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <div className={Style.emptyTable}> 
          {props.data.length > 0
            ? (
              <Table
                data={props.data}
                release={props.release}
                detail={props.detail}
              />
            )
            : (
              <EmptyState
                title="Não temos nenhum implemento criado"
                description="Para adicionar um novo implmento clique em
                “Adicionar” na parte superior!"
              />
            )
          }
        </div>
      </Card>
    </div>
  )
}

export default Manager
