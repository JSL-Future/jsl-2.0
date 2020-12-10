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

const dataListService = [
  { name: 'Selecione um serviço', value: '', hidden: true, disabled: false },
  { name: 'Corretiva', value: 'Corretiva', hidden: false, disabled: false },
  { name: 'Preventiva', value: 'Preventiva', hidden: false, disabled: false },
  { name: 'Abastecer', value: 'Abastecer', hidden: false, disabled: false },
  { name: 'Estacionar', value: 'Estacionar', hidden: false, disabled: false },
  { name: 'Lavar', value: 'Lavar', hidden: false, disabled: false },
]

const dataListEvent = [
  { name: 'Selecione um evento', value: '', hidden: true, disabled: false },
  { name: 'Doca', value: 'dock', hidden: false, disabled: false },
  { name: 'Pátio', value: 'courtyard', hidden: false, disabled: false },
  { name: 'Lavar', value: 'washing', hidden: false, disabled: false },
  { name: 'Aguardando Reparo', value: 'awaiting_repair', hidden: false, disabled: false },
  { name: 'Liberado', value: 'check-out', hidden: false, disabled: false },
]

const dataListPriority = [
  { name: 'Selecione uma prioridade', value: null, hidden: true, disabled: false },
  { name: 'Alta', value: 'high', hidden: false, disabled: false },
  { name: 'Normal', value: 'medium', hidden: false, disabled: false },
  { name: 'Baixa', value: 'low', hidden: false, disabled: false },
]

const dataListFuel = [
  { name: 'Selecione um combustível', value: '', hidden: true, disabled: false },
  { name: 'Diesel S-10', value: 'diesel_s10', hidden: false, disabled: false },
  { name: 'Arla', value: 'arla', hidden: false, disabled: false },
]

export {
  FiltersPriority,
  FiltersStatus,
  FiltersService,
  dataListOper,
  dataListService,
  dataListEvent,
  dataListPriority,
  dataListFuel,
}
