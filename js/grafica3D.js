// grafica3D.js

function llamarGrafica3D() {
    document.getElementById("metodosh2").innerHTML = "Grafica3D"
    OcultarMatrices()
    
    // Ocultar otros elementos
    const MostrarCalculadora = document.querySelector(".calculadora")
    if (MostrarCalculadora) MostrarCalculadora.style.display = "none"

    const contentMatriz = document.querySelector(".contentMatriz")
    if (contentMatriz) contentMatriz.style.height = "740px"
    
    const ProdtCruz = document.querySelector(".productoCruz")
    if (ProdtCruz) ProdtCruz.style.display = "flex"
    // Mostrar canvas
    const canvas = document.getElementById("canvas3D")
    if (canvas) {
        canvas.style.display = "block"
        actualizarGrafica()
    }
}

function dibujarGrafica3D(v1, v2) {
  const canvas = document.getElementById("canvas3D")
  if (!canvas) {
    console.error("Canvas 'canvas3D' no encontrado.")
    return
  }
  const ctx = canvas.getContext("2d")
  const width = canvas.width
  const height = canvas.height

  // Obtener colores del tema actual
  const rootStyle = getComputedStyle(document.documentElement)
  const textColor = rootStyle.getPropertyValue('--text-color').trim()
  const axisColor = rootStyle.getPropertyValue('--border-color').trim()
  const xColor = "#ff6b6b"
  const yColor = "#4ecdc4"
  const zColor = "#45b7d1"
  const vector1Color = "#ffa500"
  const vector2Color = "#9c27b0"

  // Limpiar canvas con fondo del tema
  ctx.fillStyle = rootStyle.getPropertyValue('--bg-card').trim()
  ctx.fillRect(0, 0, width, height)

  // Origen en el centro
  const cx = width / 2
  const cy = height / 2

  // Escala para visualización
  const escala = 20

  // Proyección isométrica simple: (x, y, z) → (x - z, y - z/2)
  function proyectar(x, y, z) {
    return {
      x: cx + (x - z) * escala,
      y: cy - (y - z / 2) * escala // invertir Y para que crezca hacia arriba
    }
  }

  // Configurar estilo general
  ctx.strokeStyle = axisColor
  ctx.lineWidth = 1
  ctx.font = "12px Arial"
  ctx.textAlign = "center"

  // Eje X (rojo)
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx + 200, cy)
  ctx.stroke()
  ctx.fillStyle = xColor
  ctx.fillText("X", cx + 210, cy + 10) // Ajuste: más abajo para evitar superposición

  // Eje Y (verde cian claro)
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx, cy - 200)
  ctx.stroke()
  ctx.fillStyle = yColor
  ctx.fillText("Y", cx - 10, cy - 180)

  // Eje Z (azul claro)
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx - 150, cy + 100)
  ctx.stroke()
  ctx.fillStyle = zColor
  ctx.fillText("Z", cx - 170, cy + 110)

  // Dibujar vector 1
  if (v1) {
    const p1 = proyectar(0, 0, 0)
    const p2 = proyectar(v1[0], v1[1], v1[2])
    ctx.strokeStyle = vector1Color
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()

    // Flecha simple
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x)
    const headLen = 10
    ctx.beginPath()
    ctx.moveTo(p2.x, p2.y)
    ctx.lineTo(p2.x - headLen * Math.cos(angle - Math.PI / 6), p2.y - headLen * Math.sin(angle - Math.PI / 6))
    ctx.moveTo(p2.x, p2.y)
    ctx.lineTo(p2.x - headLen * Math.cos(angle + Math.PI / 6), p2.y - headLen * Math.sin(angle + Math.PI / 6))
    ctx.stroke()
  }

  // Dibujar vector 2
  if (v2) {
    const p1 = proyectar(0, 0, 0)
    const p2 = proyectar(v2[0], v2[1], v2[2])
    ctx.strokeStyle = vector2Color
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()

    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x)
    const headLen = 10
    ctx.beginPath()
    ctx.moveTo(p2.x, p2.y)
    ctx.lineTo(p2.x - headLen * Math.cos(angle - Math.PI / 6), p2.y - headLen * Math.sin(angle - Math.PI / 6))
    ctx.moveTo(p2.x, p2.y)
    ctx.lineTo(p2.x - headLen * Math.cos(angle + Math.PI / 6), p2.y - headLen * Math.sin(angle + Math.PI / 6))
    ctx.stroke()
  }
}

// Función para actualizar la gráfica desde los inputs
function actualizarGrafica() {
  const v1 = [
    parseInt(document.getElementById("v1x").value) || 0,
    parseInt(document.getElementById("v1y").value) || 0,
    parseInt(document.getElementById("v1z").value) || 0
  ]
  const v2 = [
    parseInt(document.getElementById("v2x").value) || 0,
    parseInt(document.getElementById("v2y").value) || 0,
    parseInt(document.getElementById("v2z").value) || 0
  ]

  dibujarGrafica3D(v1, v2)
}

// Opcional: Actualizar automáticamente al cambiar los inputs
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#v1x, #v1y, #v1z, #v2x, #v2y, #v2z")
  inputs.forEach(input => {
    input.addEventListener("input", actualizarGrafica)
  })
})