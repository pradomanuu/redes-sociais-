const url"https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformacoesGlobal() {
  const res = await fetch(url)
  const dados = await res.json()
  console.log(dados);
}

visualizarInformacoesGlobais()
