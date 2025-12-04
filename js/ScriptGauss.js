function arraysIguales(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i]) || arr1[i].length !== arr2[i].length) {
            return false
        }
        for (let j = 0; j < arr1[i].length; j++) {
            const val1 = arr1[i][j]
            const val2 = arr2[i][j]

            if (typeof val1 === 'number' && typeof val2 === 'number') {
                if (Math.abs(val1 - val2) > 1e-10) {
                    return false
                }
            } else if (val1 !== val2) {
                return false
            }
        }
    }
    return true
}

function GaussJordan(){
    document.getElementById("metodosh2").innerHTML = "Gauss Jordan"
    subHeaderStyle()
}

function resultado() {
    const NumFilas = parseInt(document.getElementById("filasInput").value)
    const NumColumnas = parseInt(document.getElementById("columnasInput").value)

    if (NumFilas !== 3 || NumColumnas !== 4) {
        document.getElementById("output").innerHTML = 
        "El método de Gauss Jordan solo funciona con 3 filas y 4 columnas <br> (Perdón, pero estoy trabajando para que puedas solucionar matrices de otros tamaños)."
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

    for (let i = 0; i < 3; i++) {
        let pivote = matriz[i][i]

        if (pivote === 0) {
             document.getElementById("output").textContent = 
              "El sistema no tiene solución única (pivote = 0)."
            return
        }

        for (let j = 0; j < 4; j++) {
            matriz[i][j] /= pivote
        }

        for (let k = 0; k < 3; k++) {
            if (k !== i) {
                let factor = matriz[k][i]
                for (let j = 0; j < 4; j++) {
                    matriz[k][j] -= factor * matriz[i][j]
                }
            }
        }
    }

    const x = Math.round(matriz[0][3])
    const y = Math.round(matriz[1][3])
    const z = Math.round(matriz[2][3])

    document.getElementById('output').innerHTML = `X: ${x}<br>Y: ${y}<br>Z: ${z}`
}
