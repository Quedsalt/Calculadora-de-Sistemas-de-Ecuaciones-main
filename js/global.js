document.getElementById("botonGenerar").addEventListener("click", mostrarMatriz)
document.getElementById("GuardarBoton").addEventListener("click", botonGuardarF)
document.getElementById('GuardarBoton').addEventListener('click', function() {
  document.getElementById('output').scrollIntoView({ behavior: 'smooth' })
})

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
      inputNumber.style.textAlign = "center"
      filaDiv.appendChild(inputNumber)
    }

    contenedorPrincipal.appendChild(filaDiv)
  }

  contenedorGuardar.style.display = "block"
}


function botonGuardarF() {
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
  const H2MatrizContent = document.getElementById("H2MatrizContent")
  H2MatrizContent.style.display = "block"
  const MostrarCalculadora = document.querySelector(".calculadora")
  MostrarCalculadora.style.display = "none"
  const contentMatriz = document.querySelector(".contentMatriz")
  contentMatriz.style.justifyContent = "flex-start"
}

const botones = document.querySelectorAll(".boton-operacion")

botones.forEach(boton => {
  boton.addEventListener("click", function(e) {
    e.preventDefault()

    const metodo = this.getAttribute("data-metodo")
    
    switch(metodo) {
      case "calculadora":
        llamarCalculadora()
        break;
      case "gauss":
        GaussJordan()
        break;
      case "cramer":
        cramer()
        break
    }
  })
})

const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Ver si el usuario ya tiene una preferencia guardada
  const savedTheme = localStorage.getItem('theme') || 'night';
  if (savedTheme === 'day') {
    body.classList.add('day-theme');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('day-theme');
    const currentTheme = body.classList.contains('day-theme') ? 'day' : 'night';
    localStorage.setItem('theme', currentTheme);
  });