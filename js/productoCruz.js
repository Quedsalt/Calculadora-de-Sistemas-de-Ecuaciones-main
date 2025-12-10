// productoCruz.js

function llamarProductoCruz() {
    document.getElementById("metodosh2").innerHTML = "ProductoCruz"
    OcultarMatrices()
    //Muestra Producto cruz
    const ProdtCruz = document.querySelector(".productoCruz")
    ProdtCruz.style.display = "flex"
    //Oculta la calculadora
    const MostrarCalculadora = document.querySelector(".calculadora")
    MostrarCalculadora.style.display = "none"
}

function calcularProductoCruz() {
  // Obtener los valores de los vectores desde inputs (debes crearlos en HTML si no existen)
  const v1x = parseInt(document.getElementById("v1x").value) || 0;
  const v1y = parseInt(document.getElementById("v1y").value) || 0;
  const v1z = parseInt(document.getElementById("v1z").value) || 0;

  const v2x = parseInt(document.getElementById("v2x").value) || 0;
  const v2y = parseInt(document.getElementById("v2y").value) || 0;
  const v2z = parseInt(document.getElementById("v2z").value) || 0;

  // Producto cruz: v1 × v2 = (v1y*v2z - v1z*v2y, v1z*v2x - v1x*v2z, v1x*v2y - v1y*v2x)
  const cx = v1y * v2z - v1z * v2y;
  const cy = v1z * v2x - v1x * v2z;
  const cz = v1x * v2y - v1y * v2x;

  // Mostrar resultado en la sección de salida
  document.getElementById("output").innerHTML = `Producto cruz: (${cx}, ${cy}, ${cz})`;
}