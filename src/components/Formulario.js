import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Formulario extends Component {
  constructor(props) {
    super(props)

    this.nombreGastoRef = React.createRef()
    this.cantidadGastoRef = React.createRef()

    this.crearGasto = this.crearGasto.bind(this)
  }

  crearGasto(e) {
    e.preventDefault()
    const { agregarGasto } = this.props
    const gasto = {
      nombreGasto: this.nombreGastoRef.current.value,
      cantidadGasto: this.cantidadGastoRef.current.value
    }

    agregarGasto(gasto)

    e.currentTarget.reset()
  }

  render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
            ref={this.nombreGastoRef}
          />
        </div>
        <div className="campo">
          <label>Cantidad</label>
          <input
            className="u-full-width"
            type="number"
            defaultValue="0"
            min="1"
            ref={this.cantidadGastoRef}
          />
        </div>
        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    )
  }
}

Formulario.propTypes = {
  agregarGasto: PropTypes.func.isRequired,
}

export default Formulario
