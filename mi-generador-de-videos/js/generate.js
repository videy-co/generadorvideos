function generarPagina() {
  const link = document.getElementById("mp4Link").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const resultado = document.getElementById("resultado");

  if (!link || !nombre) {
    resultado.innerText = "Por favor, completa todos los campos.";
    return;
  }

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Video ${nombre}</title>
</head>
<body>
  <h1>Reproductor de video</h1>
  <video controls width="720" src="${link}"></video>
</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  resultado.innerHTML = `
    ✅ Código generado. Haz clic para descargar tu página:<br/>
    <a href="${url}" download="${nombre}.html">Descargar ${nombre}.html</a><br/><br/>
    Luego súbelo a la carpeta <code>/videos</code> de tu repositorio GitHub.
    <br/>Tu link será:<br/>
    <code>https://TUUSUARIO.github.io/videos/${nombre}.html</code>
  `;
}