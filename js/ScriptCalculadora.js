function llamarCalculadora() {
    document.getElementById("metodosh2").innerHTML = "Calculadora"
    const MostrarCalculadora = document.querySelector(".calculadora")
    MostrarCalculadora.style.display = "grid"

    document.getElementById("h2TopOperarcion").innerHTML = ""
    const BotonGenerar = document.getElementById("botonGenerar")
    const TablaGMatriz = document.getElementById("tablaGMatriz")
    BotonGenerar.style.display = "none"
    TablaGMatriz.style.display = "none"

    const headerOperacion = document.getElementById("headerOperacion")
    headerOperacion.style.justifyContent = "center"

    contenedorPrincipal.innerHTML = ""
    contenedorGuardar.style.display = "none"
    document.getElementById("output").innerHTML = ""

    const H2MatrizContent = document.getElementById("H2MatrizContent")
    H2MatrizContent.style.display = "none"
    const contentMatriz = document.querySelector(".contentMatriz")
    contentMatriz.style.justifyContent = "center"
}

const display = document.querySelector("#display")
const botonesC = document.querySelectorAll(".button")

botonesC.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(btn.id === "="){
        display.value = eval(display.value)
    }else if(btn.id === "ac"){
        display.value = ""
    } else if(btn.id === "de"){
        display.value = display.value.slice(0, -1)
    }else {
        display.value += btn.id
    }
  })
})