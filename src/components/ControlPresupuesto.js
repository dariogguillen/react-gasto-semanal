import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Presupuesto from './Presupuesto'
import Restante from './Restante'

class ControlPresupuesto extends Component {
  render() {
    const { presupuesto, restante } = this.props
    return (
      <div>
        <Presupuesto presupuesto={presupuesto} />
        <Restante presupuesto={presupuesto} restante={restante} />
      </div>
    )
  }
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
}

export default ControlPresupuesto
