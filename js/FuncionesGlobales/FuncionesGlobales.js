function mostrarMatriz() {
  const NumFilas = parseInt(document.getElementById("filasInput").value)
  const NumColumnas = parseInt(document.getElementById("columnasInput").value)

  contenedorPrincipal.innerHTML = ""

  for (let i = 0; i < NumFilas; i++) {
    const filaDiv = document.createElement("div")
    filaDiv.style.display = "flex"
    filaDiv.style.gap = "8px"
    filaDiv.style.margin = "5px 0"

    for (let j = 0; j < NumColumnas; j++) {
      const inputNumber = document.createElement("input")
      inputNumber.type = "number"
      inputNumber.id = `input_${i}_${j}`
      inputNumber.style.width = "50px"
      inputNumber.style.height = "50px"
      inputNumber.style.textAlign = "center"
      filaDiv.appendChild(inputNumber)
    }

    contenedorPrincipal.appendChild(filaDiv)
  }

  contenedorGuardar.style.display = "block"
}

function botonGuardarf() {
  if (botonGuardar) {
    const metodosh2 = document.getElementById("metodosh2").textContent.trim()
    if (metodosh2 === "Cramer") {
      guardarMatriz()
    } else if (metodosh2 === "Gauss Jordan"){
      resultado()
    }
  } else {
    document.getElementById("output").innerHTML = "NO hay seleccionada un metodo disponible"
  }
}

function subHeaderStyle(){
  contenedorPrincipal.innerHTML = ""
  contenedorGuardar.style.display = "none"
  document.getElementById("output").innerHTML = ""
  document.getElementById("h2TopOperarcion").innerHTML = "Matriz"
  const BotonGenerar = document.getElementById("botonGenerar")
  const TablaGMatriz = document.getElementById("tablaGMatriz")
  BotonGenerar.style.display = "block"
  TablaGMatriz.style.display = "block"
  const headerOperacion = document.getElementById("headerOperacion")
  headerOperacion.style.justifyContent = "space-between"
  const H2Calculadora = document.getElementById("h2Calculadora")
  H2Calculadora.style.display = "none"
}