import React from 'react'
import PropTypes from 'prop-types'

const Gasto = props => {
  const { nombreGasto, cantidadGasto } = props.itemGasto
  return (
    <li className="gatos">
      <p>
        {nombreGasto}
        <span className="gasto">${cantidadGasto}</span>
      </p>
    </li>
  )
}

Gasto.propTypes = {
  itemGasto: PropTypes.object.isRequired
}

export default Gasto
