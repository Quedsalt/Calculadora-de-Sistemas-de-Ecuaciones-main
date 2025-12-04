function llamarCalculadora() {
    document.getElementById("metodosh2").innerHTML = "Calculadora"
    const Calculadora = document.getElementById("Calculadora")
    Calculadora.style.display = "block"

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