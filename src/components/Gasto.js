import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Gasto extends Component {
  render() {
    const { nombreGasto, cantidadGasto } = this.props.itemGasto
    return (
      <li className="gatos">
        <p>
          {nombreGasto}
          <span className="gasto">${cantidadGasto}</span>
        </p>
      </li>
    )
  }
}

Gasto.propTypes = {
  itemGasto: PropTypes.object.isRequired
}

export default Gasto
