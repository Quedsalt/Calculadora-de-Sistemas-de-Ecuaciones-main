// grafica3D.js
function llamarGrafica3D(){
    document.getElementById("metodosh2").innerHTML = "Grafica3D"
    OcultarMatrices()
    //ocultar calculadora
    const MostrarCalculadora = document.querySelector(".calculadora")
    MostrarCalculadora.style.display = "none"
    //ocultar producto cruz
    const ProdtCruz = document.querySelector(".productoCruz")
    ProdtCruz.style.display = "none"
    //Mostrar Grafica
    const canvas = document.getElementById("canvas3D")
    canvas.style.display = "flex"
}

function dibujarGrafica3D(v1, v2) {
  const canvas = document.getElementById("canvas3D");
  if (!canvas) {
    console.error("Canvas 'canvas3D' no encontrado.");
    return;
  }
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Limpiar canvas
  ctx.clearRect(0, 0, width, height);

  // Origen en el centro
  const cx = width / 2;
  const cy = height / 2;

  // Escala para visualización (ajustable)
  const escala = 20;

  // Proyección isométrica simple: (x, y, z) → (x - z, y - z/2)
  function proyectar(x, y, z) {
    return {
      x: cx + (x - z) * escala,
      y: cy - (y - z / 2) * escala // invertir Y para que crezca hacia arriba
    };
  }

  // Dibujar ejes X, Y, Z
  ctx.strokeStyle = "#444";
  ctx.lineWidth = 1;

  // Eje X (rojo)
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + 200, cy);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fillText("X", cx + 210, cy);

  // Eje Y (verde)
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx, cy - 200);
  ctx.stroke();
  ctx.fillStyle = "green";
  ctx.fillText("Y", cx - 10, cy - 210);

  // Eje Z (azul) - en diagonal
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx - 150, cy + 100);
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fillText("Z", cx - 170, cy + 110);

  // Dibujar vector 1
  if (v1) {
    const p1 = proyectar(0, 0, 0);
    const p2 = proyectar(v1[0], v1[1], v1[2]);
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // Flecha simple
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const headLen = 10;
    ctx.beginPath();
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p2.x - headLen * Math.cos(angle - Math.PI / 6), p2.y - headLen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p2.x - headLen * Math.cos(angle + Math.PI / 6), p2.y - headLen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }

  // Dibujar vector 2
  if (v2) {
    const p1 = proyectar(0, 0, 0);
    const p2 = proyectar(v2[0], v2[1], v2[2]);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const headLen = 10;
    ctx.beginPath();
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p2.x - headLen * Math.cos(angle - Math.PI / 6), p2.y - headLen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p2.x - headLen * Math.cos(angle + Math.PI / 6), p2.y - headLen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }
}

// Función para actualizar la gráfica desde los inputs
function actualizarGrafica() {
  const v1 = [
    parseInt(document.getElementById("v1x").value) || 0,
    parseInt(document.getElementById("v1y").value) || 0,
    parseInt(document.getElementById("v1z").value) || 0
  ];
  const v2 = [
    parseInt(document.getElementById("v2x").value) || 0,
    parseInt(document.getElementById("v2y").value) || 0,
    parseInt(document.getElementById("v2z").value) || 0
  ];

  dibujarGrafica3D(v1, v2);
}