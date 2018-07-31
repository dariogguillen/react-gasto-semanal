import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { revisarPresupuesto } from '../helpers'

class Restante extends Component {
  render() {
    const { presupuesto, restante} = this.props
    return (
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: ${restante}
      </div>
    )
  }
}

Restante.propTypes = {
  restante: PropTypes.number.isRequired,
  presupuesto: PropTypes.number.isRequired
}

export default Restante
