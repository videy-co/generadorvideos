function generarPagina() {
  const link = document.getElementById("mp4Link").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const resultado = document.getElementById("resultado");

  if (!link || !nombre) {
    resultado.innerText = "Completa todos los campos.";
    return;
  }

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${nombre}</title>
</head>
<body>
  <h1>Video: ${nombre}</h1>
  <video src="${link}" width="720" controls></video>
</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  resultado.innerHTML = `
    ✅ Página generada. Haz clic para descargar:<br>
    <a href="${url}" download="${nombre}.html">Descargar ${nombre}.html</a><br><br>
    Luego súbela tú mismo a GitHub en la carpeta <code>videos/</code>.
  `;
}
