import React from 'react'

const infoPage = {
  create: {
    title: 'Acesso criado com sucesso!',
    message: (
      <>Acesso registrado clique em <b>“Home”</b> para navegar<br /> para  a tela inicial ou clique em <b>“Novo”</b> para adicionar um novo acesso!</>
    ),
    actionText: 'Novo acesso'
  },
  detail: {
    title: 'Evento criado com sucesso!',
    message: (
      <>Evento registrado clique em <b>“Home”</b> para navegar<br /> para  a tela inicial ou clique em <b>“Voltar”</b> para retornar ao acesso!</>
    ),
    actionText: 'Voltar',
  },
  priority: {
    title: 'Prioridade alterada com sucesso!',
    message: (
      <>Prioridade alterada clique em <b>“Home”</b> para navegar<br /> para  a tela inicial ou clique em <b>“Voltar”</b> para retornar ao acesso!</>
    ),
    actionText: 'Voltar',
  },
  suply: {
    title: 'Abastecimento iniciado com sucesso!',
    message: (
      <>Abastecimento iniciado clique em <b>“Home”</b> para navegar<br /> para  a tela inicial ou clique em <b>“Voltar”</b> para retornar ao acesso!</>
    ),
    actionText: 'Voltar',
  },
}

export default infoPage
