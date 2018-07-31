import React from 'react'
import PropTypes from 'prop-types'

import { revisarPresupuesto } from '../helpers'

const Restante = props => {
  const { presupuesto, restante } = props
  return (
    <div className={revisarPresupuesto(presupuesto, restante)}>
      Restante: ${restante}
    </div>
  )
}

Restante.propTypes = {
  restante: PropTypes.number.isRequired,
  presupuesto: PropTypes.number.isRequired
}

export default Restante
