import React from 'react'
import PropTypes from 'prop-types'

import Gasto from './Gasto'

const Listado = props => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {Object.keys(props.listaGasto).map(key => (
      <Gasto key={key} itemGasto={props.listaGasto[key]} />
    ))}
  </div>
)

Listado.propTypes = {
  listaGasto: PropTypes.object.isRequired
}

export default Listado
