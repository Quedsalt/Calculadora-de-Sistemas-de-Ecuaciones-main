function llamarCalculadora() {
    document.getElementById("metodosh2").innerHTML = "Calculadora"
    //muestra la calculadora
    const MostrarCalculadora = document.querySelector(".calculadora")
    MostrarCalculadora.style.display = "grid"
    const contentMatriz = document.querySelector(".contentMatriz")
    contentMatriz.style.justifyContent = "center"
    OcultarMatrices()
    //Oculta el producto cruz
    const ProdtCruz = document.querySelector(".productoCruz")
    ProdtCruz.style.display = "none"
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