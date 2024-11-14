async function quandidadedeUsuarioPorRedes() {
 cont url = 
 const res = await fetch(url)
 const dados = await res.json()
  const nomeDasRedes = object.keys(dados)
  const quantidadedeUsuarios = object.values(dados)

  const data = [
    {
       x: nomeDasRedes,
      y: quantidadeDeUsuarios,
      type: "bar"
      }
    ]

  const graficos = document.createElement("div")
  graico.className = "grafico"
  document.geTElementbyid"(graficos-container).apendChild(graficos)
  plotly.newPlot(gtaficos,data)
}

quantidadedeUsuariosPorRede()
  

