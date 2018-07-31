import React from 'react'
import PropTypes from 'prop-types'

const Formulario = props => {
  const nombreGastoRef = React.createRef()
  const cantidadGastoRef = React.createRef()

  const crearGasto = e => {
    e.preventDefault()
    const { agregarGasto } = props
    const gasto = {
      nombreGasto: nombreGastoRef.current.value,
      cantidadGasto: cantidadGastoRef.current.value
    }
    agregarGasto(gasto)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={crearGasto}>
      <h2>Agrega tus gastos aqui</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          className="u-full-width"
          type="text"
          placeholder="Ej. Transporte"
          ref={nombreGastoRef}
        />
      </div>
      <div className="campo">
        <label>Cantidad</label>
        <input
          className="u-full-width"
          type="number"
          placeholder="Ej. 150"
          min="0"
          ref={cantidadGastoRef}
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

Formulario.propTypes = {
  agregarGasto: PropTypes.func.isRequired
}

export default Formulario
