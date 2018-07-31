import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Gasto from './Gasto'

class Listado extends Component {
  render() {
    const { listaGasto } = this.props
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {Object.keys(listaGasto).map(key => (
          <Gasto key={key} itemGasto={listaGasto[key]} />
        ))}
      </div>
    )
  }
}

Listado.propTypes = {
  listaGasto: PropTypes.object.isRequired
}

export default Listado
