import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IngresarPresupuesto extends Component {
  constructor(props) {
    super(props)

    this.presupuestoRef = React.createRef()

    this.crearPresupuesto = this.crearPresupuesto.bind(this)
  }

  crearPresupuesto (e) {
    const { agregarPresupuesto } = this.props
    e.preventDefault()
    agregarPresupuesto(this.presupuestoRef.current.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.crearPresupuesto}>
          <h2>Ingresa Tu Presupuesto Semanal</h2>
          <div className="campo">
            <input
              className="u-full-width"
              type="number"
              placeholder="Ej. 300"
              min="0"
              ref={this.presupuestoRef}
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
}

IngresarPresupuesto.propTypes = {
  agregarPresupuesto: PropTypes.func.isRequired,
}

export default IngresarPresupuesto
