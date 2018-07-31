import React, { Component } from 'react'

import Header from './Header'
import Formulario from './Formulario'
import '../css/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = null

    this.agregarGasto = this.agregarGasto.bind(this)
  }

  agregarGasto(gasto) {
    this.setState({
      gastos: gasto
    })
  }

  render() {
    return (
      <div className="App container">
        <Header title="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarGasto={this.agregarGasto}/>
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
