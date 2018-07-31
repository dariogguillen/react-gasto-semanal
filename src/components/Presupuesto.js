import React from 'react'
import PropTypes from 'prop-types'

const Presupuesto = props => (
  <div className="alert alert-primary">
    Presupuesto: ${props.presupuesto}
  </div>
)

Presupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired
}

export default Presupuesto
