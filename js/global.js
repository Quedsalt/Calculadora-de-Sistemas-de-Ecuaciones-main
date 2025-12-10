document.getElementById("botonGenerar").addEventListener("click", mostrarMatriz)
document.getElementById('GuardarBoton').addEventListener('click', () => {
  botonGuardarF()
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
    }else if(metodosh2 === "Producto Cruz"){
      calcularProductoCruz()
    }
  } else {
    document.getElementById("output").innerHTML = "NO hay seleccionada un metodo disponible"
  }
}

//Actualiza el diseño de la pagina
function subHeaderStyle(){
  contenedorPrincipal.innerHTML = ""
  contenedorGuardar.style.display = "none"
  document.getElementById("output").innerHTML = ""
  document.getElementById("h2TopOperarcion").innerHTML = "Matriz"
  //Muestra el boton y tabla de matriz
  const BotonGenerar = document.getElementById("botonGenerar")
  const TablaGMatriz = document.getElementById("tablaGMatriz")
  BotonGenerar.style.display = "block"
  TablaGMatriz.style.display = "block"
  const headerOperacion = document.getElementById("headerOperacion")
  headerOperacion.style.justifyContent = "space-between"
  //Muestra el contenido de matrices
  const H2MatrizContent = document.getElementById("H2MatrizContent")
  H2MatrizContent.style.display = "block"
  //Oculta Calculadora
  const MostrarCalculadora = document.querySelector(".calculadora")
  MostrarCalculadora.style.display = "none"
  const contentMatriz = document.querySelector(".contentMatriz")
  contentMatriz.style.justifyContent = "flex-start"
  //Ocuta Producto Cruz
  const ProdtCruz = document.querySelector(".productoCruz")
  ProdtCruz.style.display = "none"
  //Oculta Grafica
  const canvas = document.getElementById("canvas3D")
    if (canvas) {
    canvas.style.display = "none"
  }
}

function OcultarMatrices(){
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
}

//Llama los metodos
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
      case "ProductoCruz":
        llamarProductoCruz()
        break
      case "Grafica3D":
        llamarGrafica3D()
        break
    }
  })
})

// Estilos de la pagina Noche/Dia

// Referencias a los elementos del DOM
const themeToggleBtn = document.getElementById('theme-toggle')
const modeToggleCheckbox = document.getElementById('modeToggle')
const body = document.body

// 1. Lógica para establecer el tema inicial
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
        // Si hay un tema guardado, aplicarlo
        if (savedTheme === 'day') {
            body.classList.add('day-theme')
            modeToggleCheckbox.checked = true; // Sincroniza el checkbox al estado 'checked' (día)
        } else {
            // Si savedTheme es 'night' o cualquier otro valor, asegura que no tenga day-theme
            body.classList.remove('day-theme')
            modeToggleCheckbox.checked = false // Sincroniza el checkbox al estado 'unchecked' (noche)
        }
    } else {
        // Si no hay tema guardado en localStorage, detecta la preferencia del sistema
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

        if (!prefersDarkMode) {
            // Si el sistema prefiere CLARO (Día), aplica el tema de día
            body.classList.add('day-theme')
            modeToggleCheckbox.checked = true // Sincroniza el checkbox
            localStorage.setItem('theme', 'day') // Guarda la preferencia del sistema para futuras visitas
        } else {
            // Si el sistema prefiere OSCURO (Noche), aplica el tema de noche
            body.classList.remove('day-theme')
            modeToggleCheckbox.checked = false // Sincroniza el checkbox
            localStorage.setItem('theme', 'night') // Guarda la preferencia del sistema
        }
    }
}

// 2. Lógica para cambiar el tema al hacer clic en el toggle
themeToggleBtn.addEventListener('click', () => {
    // Esto lo dispara el click en el div.toggle--btn
    body.classList.toggle('day-theme')
  

    // Guardar la nueva preferencia en localStorage
    const currentTheme = body.classList.contains('day-theme') ? 'day' : 'night'
    localStorage.setItem('theme', currentTheme)
});

// Ejecutar la función inicial al cargar la página
document.addEventListener('DOMContentLoaded', setInitialTheme)
