const FiltersPriority = [
  { name: 'priority', children: 'Alta' },
  { name: 'priority', children: 'Normal' },
  { name: 'priority', children: 'Baixa' }
]

const FiltersService = [
  { name: 'service', children: 'Corretiva' },
  { name: 'service', children: 'Preventiva' },
  { name: 'service', children: 'Lavar' },
  { name: 'service', children: 'Abastecer' },
  { name: 'service', children: 'Estacionar' }
]

const FiltersStatus = [
  { name: 'status', children: 'Entrada' },
  { name: 'status', children: 'Doca' },
  { name: 'status', children: 'Aguardando Reparo' },
  { name: 'status', children: 'Pátio' },
  { name: 'status', children: 'Lavar' },
  { name: 'status', children: 'Liberado' },
]

const dataListOper = [
  { name: 'Selecione uma operação', value: '', hidden: true, disabled: false },
  { name: 'Mercedes-Benz', value: 'Mercedes', hidden: false, disabled: false },
  { name: 'Ford Motor', value: 'Ford', hidden: false, disabled: false },
  { name: 'Scania do Brasil', value: 'Scania', hidden: false, disabled: false },
  { name: 'Lear Corporation', value: 'lear', hidden: false, disabled: false },
  { name: 'Renault do Brasil', value: 'renault', hidden: false, disabled: false },
  { name: 'Whirlpool', value: 'whirlpool', hidden: false, disabled: false },
  { name: 'GM Interplantas', value: 'gmIinterplatas', hidden: false, disabled: false },
  { name: 'GM Cegonha', value: 'gmCegonha', hidden: false, disabled: false},
  { name: 'Volkswagem', value: 'volkswagem', hidden: false, disabled: false },
]

export {
  FiltersPriority,
  FiltersStatus,
  FiltersService,
  dataListOper,
}
