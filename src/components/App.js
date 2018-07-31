import React, { Component } from 'react'

import Header from './Header'
import Formulario from './Formulario'
import Listado from './Listado'
import IngresarPresupuesto from './IngresarPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
import { validarPresupuesto } from '../helpers'
import '../css/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      presupuesto: '',
      restante: '',
      gastos: {}
    }

    this.agregarPresupuesto = this.agregarPresupuesto.bind(this)
    this.agregarGasto = this.agregarGasto.bind(this)
  }

  agregarPresupuesto(presupuesto) {
    const resultado = validarPresupuesto(presupuesto)
    this.setState({
      presupuesto: resultado,
      restante: resultado
    })
  }

  agregarGasto(gasto) {
    let { gastos, restante } = this.state
    gastos[`gasto${Date.now()}`] = gasto
    restante -= parseInt(gasto.cantidadGasto, 10)
    this.setState({
      gastos,
      restante
    })
  }

  render() {
    const { gastos, presupuesto, restante } = this.state
    return (
      <div className="App container">
        <Header title="Gasto Semanal" />
        <div className="contenido-principal contenido">
          {presupuesto === '' ? (
            <IngresarPresupuesto agregarPresupuesto={this.agregarPresupuesto} />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarGasto={this.agregarGasto} />
              </div>
              <div className="one-half column">
                <Listado listaGasto={gastos} />
                <ControlPresupuesto
                  presupuesto={Number(presupuesto)}
                  restante={Number(restante)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
