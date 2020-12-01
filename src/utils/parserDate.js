import moment from 'moment'

const formattedDate = date => moment(date).format('DD/MMM - HH:mm')

const diff = (createdAt, updatedAt, status) => {
  const start = moment(createdAt)
  const end = status !== 'check-out' ? moment() : moment(updatedAt)
  const diff = end.diff(start)
  const diffTime = moment.utc(diff).format('HH:mm')
  return diffTime
}

export {
  diff,
  formattedDate,
}
