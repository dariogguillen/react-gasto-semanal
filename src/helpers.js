export const validarPresupuesto = presupuesto => {
  if (presupuesto > 0) {
    return presupuesto
  } else {
    return ''
  }
}

export const revisarPresupuesto = (presupuesto, restante) => {
  let clase;
  if ((presupuesto / 4) > restante) {
    clase = 'alert alert-danger'
  } else if ((presupuesto / 2) > restante) {
    clase = 'alert alert-warning'
  } else {
    clase = 'alert alert alert-success'
  }
  return clase
} 
