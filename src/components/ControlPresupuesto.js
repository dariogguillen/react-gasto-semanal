import React from 'react'
import PropTypes from 'prop-types'

import Presupuesto from './Presupuesto'
import Restante from './Restante'

const ControlPresupuesto = props => {
  const { presupuesto, restante } = props
  return (
    <div>
      <Presupuesto presupuesto={presupuesto} />
      <Restante presupuesto={presupuesto} restante={restante} />
    </div>
  )
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
}

export default ControlPresupuesto
