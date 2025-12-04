const contenedorGuardar = document.getElementById("GuardarMatriz")
contenedorGuardar.style.display = "none"

const contenedorPrincipal = document.getElementById("contenedorMatriz")

const botonGuardar = contenedorGuardar.querySelector("button")

function cramer(){
  document.getElementById("metodosh2").innerHTML = "Cramer"
  subHeaderStyle()
}

function guardarMatriz() {
  const NumFilas = parseInt(document.getElementById("filasInput").value)
  const NumColumnas = parseInt(document.getElementById("columnasInput").value)

    if (NumFilas !== 3 || NumColumnas !== 4) {
        document.getElementById("output").innerHTML = 
        "El método de Cramer (con Sarrus) solo funciona con 3 filas y 4 columnas <br> (Perdón, pero estoy trabajando para que puedas solucionar matrices de otros tamaños)."
        return
    }

  const matriz = []

  for (let i = 0; i < NumFilas; i++) {
    const fila = []
    for (let j = 0; j < NumColumnas; j++) {
      const valor = parseInt(document.getElementById(`input_${i}_${j}`).value) || 0
      fila.push(valor)
    }
    matriz.push(fila)
  }

  const A = matriz.map(fila => [fila[0], fila[1], fila[2]])
  const B = matriz.map(fila => fila[3])

  function determinante3x3(m) {
    return (
      m[0][0] * m[1][1] * m[2][2] +
      m[0][1] * m[1][2] * m[2][0] +
      m[0][2] * m[1][0] * m[2][1] -
      m[0][2] * m[1][1] * m[2][0] -
      m[0][0] * m[1][2] * m[2][1] -
      m[0][1] * m[1][0] * m[2][2]
    )
  }

  const detA = determinante3x3(A)

  if (detA === 0) {
    document.getElementById("output").textContent = 
      "El sistema no tiene solución única (determinante = 0)."
    return
  }

  const Ax = A.map((fila, i) => [B[i], fila[1], fila[2]])
  const Ay = A.map((fila, i) => [fila[0], B[i], fila[2]])
  const Az = A.map((fila, i) => [fila[0], fila[1], B[i]])

  const detAx = determinante3x3(Ax)
  const detAy = determinante3x3(Ay)
  const detAz = determinante3x3(Az)

  const x = detAx / detA
  const y = detAy / detA
  const z = detAz / detA

  document.getElementById("output").innerHTML = `x = ${x}<br>y = ${y}<br>z = ${z}`
}