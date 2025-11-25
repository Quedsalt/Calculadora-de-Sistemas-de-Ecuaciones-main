function llamarCalculadora() {

    document.getElementById("h2TopOperarcion").innerHTML = "Calculadora"
    document.getElementById("metodosh2").innerHTML = "Calculadora"
    const BotonGenerar = document.getElementById("botonGenerar")
    const TablaGMatriz = document.getElementById("tablaGMatriz")
    BotonGenerar.style.display = "none"
    TablaGMatriz.style.display = "none"

    const headerOperacion = document.getElementsByClassName("headerOperacion")
    document.querySelectorAll(".headerOperacion").forEach(el => {
        el.style.display = "flex"
    })
    const H2Calculadora = document.getElementById("h2Calculadora")
    H2Calculadora.style.display = "block"
}