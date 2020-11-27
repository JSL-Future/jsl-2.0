import React from 'react'

const infoPage = {
  create: {
    title: 'Erro ao criar acesso!',
    message: (
      <>Não foi possível criar o acesso! Verifique os dados informados ou se a <b>Placa informada possui processo em andamento</b>.</>
    )
  },
  detail: {
    title: 'Erro ao criar evento!',
    message: (
      <>Clique em <b>“Voltar”</b> e tente novamente!</>
    ),
    actionText: 'Voltar'
  },
  priority: {
    title: 'Erro ao alterar a prioridade!',
    message: (
      <>Clique em <b>“Voltar”</b> e tente novamente!</>
    ),
    actionText: 'Voltar'
  },
  suply: {
    title: 'Erro ao iniciar o Abastecimento!',
    message: (
      <>Clique em <b>“Voltar”</b> e tente novamente!</>
    ),
    actionText: 'Voltar'
  },
}

export default infoPage
