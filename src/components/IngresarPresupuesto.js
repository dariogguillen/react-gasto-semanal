import React from 'react'
import PropTypes from 'prop-types'

const IngresarPresupuesto = props => {
  const presupuestoRef = React.createRef()

  const crearPresupuesto = e => {
    e.preventDefault()
    props.agregarPresupuesto(presupuestoRef.current.value)
  }

  return (
    <div>
      <form onSubmit={crearPresupuesto}>
        <h2>Ingresa Tu Presupuesto Semanal</h2>
        <div className="campo">
          <input
            className="u-full-width"
            type="number"
            placeholder="Ej. 300"
            min="0"
            ref={presupuestoRef}
          />
        </div>
        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    </div>
  )
}

IngresarPresupuesto.propTypes = {
  agregarPresupuesto: PropTypes.func.isRequired
}

export default IngresarPresupuesto
