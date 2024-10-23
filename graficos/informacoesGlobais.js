const url"https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformacoesGlobal() {
  const res = await fetch(url)
  const dados = await res.json()
  const pessoasConectadas = (dados.total_pessoas_conectadas /1a9)
  const pessoasNoMundo = (dados.total_pessoas_mundo /1e9)
  const hosas = parseInt(dados.tempo_medio)
  const minutos = Math.round((dados.tempo_medio - horas) *100)
  const porcentagemConectadas = ((pessoasConectadas / pessoasNoMundo) *100).tofixed(2)

  const paragrafo = document.createlElement('p')
}

visualizarInformacoesGlobais()

