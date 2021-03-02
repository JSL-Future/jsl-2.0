const FiltersPriority = [
  { name: 'priority', children: 'Alta' },
  { name: 'priority', children: 'Normal' },
  { name: 'priority', children: 'Baixa' }
]

const FiltersService = [
  { name: 'reason', children: 'Corretiva' },
  { name: 'reason', children: 'Preventiva' },
  { name: 'reason', children: 'Lavar' },
  { name: 'reason', children: 'Abastecer' },
  { name: 'reason', children: 'Estacionar' }
]

const FiltersStatus = [
  { name: 'status', children: 'Entrada', value: 'check-in' },
  { name: 'status', children: 'Saída', value: 'check-out' },
]

const dataListOper = [
  { name: 'Selecione uma operação', value: '', hidden: true, disabled: false },
  { name: 'Mercedes-Benz', value: 'mercedes', hidden: false, disabled: false },
  { name: 'Ford Motor', value: 'ford', hidden: false, disabled: false },
  { name: 'Scania do Brasil', value: 'scania', hidden: false, disabled: false },
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
