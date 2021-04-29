/*
Regex usada para transcrever a base de dados
^(\d+),(\d+),(\w+),([\SáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ/ ]+),?([\S()áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ/ ]+)?
{pena: "$1", multa: "$2", fianca: "$3", crime: "$4", desc: "$5"},
*/

export const transito = [
  { pena: "0", multa: "700", fianca: "X", crime: "Direção Perigosa" },
  { pena: "0", multa: "1000", fianca: "X", crime: "Abandono de veículo pessoal" },
  { pena: "15", multa: "1500", fianca: "3000", crime: "Abandono de Serviço" },
  { pena: "0", multa: "900", fianca: "X", crime: "Estacionar em local proibido" },
  { pena: "0", multa: "1000", fianca: "X", crime: "Excesso de velocidade" },
  { pena: "10", multa: "5000", fianca: "10000", crime: "Tentativa de fuga com Veículo" },
  { pena: "0", multa: "500", fianca: "X", crime: "Conduzir sem capacete" },
  { pena: "0", multa: "500", fianca: "X", crime: "Sinal Vermelho" },
  { pena: "5", multa: "15000", fianca: "30000", crime: "Poluição Sonora" },
]

export const trafico = [
  { pena: "25", multa: "5000", fianca: "X", crime: "Tráfico de arma de fogo", desc: "(Superior a 2und)" },
  { pena: "15", multa: "5000", fianca: "X", crime: "Tráfico de Órgãos", desc: "(Superior a 3und)" },
  { pena: "10", multa: "5000", fianca: "X", crime: "Tráfico de peça de Armas", desc: "(Superior a 2und)" },
  { pena: "15", multa: "5000", fianca: "X", crime: "Tráfico de munição", desc: "(Superior a 50und.)" },
]

export const periclitacao = [
  { pena: "5", multa: "10000", fianca: "15000", crime: "Omissão de Socorro", desc: "" },
  { pena: "15", multa: "15000", fianca: "X", crime: "Homicídio Culposo", desc: "" },
  { pena: "20", multa: "20000", fianca: "X", crime: "Homicídio Doloso", desc: "" },
  { pena: "5", multa: "4000", fianca: "9000", crime: "Lesão corporal", desc: "" },
  { pena: "6", multa: "15000", fianca: "20000", crime: "Uso irregular do porte de armas", desc: "(Retenção do porte de arma)" },
]

export const honra = [
  { pena: "12", multa: "4000", fianca: "13000", crime: "Injuria", desc: "" },
  { pena: "10", multa: "4000", fianca: "13000", crime: "Calunia", desc: "" },
  { pena: "20", multa: "15000", fianca: "30000", crime: "Assédio", desc: "" },
  { pena: "10", multa: "3000", fianca: "10000", crime: "Difamação", desc: "" },
]

export const liberdadePessoal = [
  { pena: "8", multa: "2000", fianca: "5000", crime: "Ameaça", desc: "" },
  { pena: "25", multa: "50000", fianca: "X", crime: "Sequestro e Cárcere privado", desc: "" },
  { pena: "10", multa: "3000", fianca: "7500", crime: "Cúmplice", desc: "" },
]

export const patrimonio = [
  { pena: "10", multa: "5000", fianca: "8000", crime: "Furto", desc: "" },
  { pena: "8", multa: "6000", fianca: "11000", crime: "Roubo", desc: "" },
  { pena: "15", multa: "10000", fianca: "18000", crime: "Tentativa de roubo a loja", desc: "" },
  { pena: "6", multa: "3000", fianca: "7500", crime: "Tentativa de roubo a caixa", desc: "" },
  { pena: "30", multa: "45000", fianca: "80000", crime: "Tentativa de roubo a banco", desc: "" },
  { pena: "25", multa: "35000", fianca: "60000", crime: "Tentativa de roubo a joalheria", desc: "" },
  { pena: "30", multa: "20000", fianca: "32000", crime: "Roubo a loja", desc: "" },
  { pena: "12", multa: "6000", fianca: "15000", crime: "Roubo a caixa", desc: "" },
  { pena: "60", multa: "80000", fianca: "120000", crime: "Roubo a banco", desc: "" },
  { pena: "40", multa: "65000", fianca: "100000", crime: "Roubo a joalheria", desc: "" },
  { pena: "5", multa: "3000", fianca: "20000", crime: "Danificar património público", desc: "" },
  { pena: "10", multa: "6000", fianca: "25000", crime: "Danificar património alheio", desc: "" },
]

export const estelionatoOutros = [
  { pena: "10", multa: "2000", fianca: "5000", crime: "Receptação", desc: "" },
]

export const pazPublica = [
  { pena: "10", multa: "10000", fianca: "X", crime: "Associação criminosa", desc: "" },
  { pena: "10", multa: "15000", fianca: "X", crime: "Formação de quadrilha", desc: "" },
  { pena: "5", multa: "7000", fianca: "X", crime: "Apologia ao crime", desc: "" },
]

export const militares = [
  { pena: "15", multa: "20000", fianca: "30000", crime: "Prevaricação", desc: "" },
  { pena: "5", multa: "5000", fianca: "X", crime: "Desobediência a um superior", desc: "" },
  { pena: "15", multa: "5000", fianca: "X", crime: "Baderna na corporação", desc: "" },
  { pena: "15", multa: "10000", fianca: "X", crime: "Insultos ou brincadeiras a um superior", desc: "" },
  { pena: "20", multa: "20000", fianca: "X", crime: "Descumprimento de regras internas", desc: "" },
]

export const admistrativoP = [
  { pena: "10", multa: "7000", fianca: "15000", crime: "Resistência", desc: "" },
  { pena: "4", multa: "8000", fianca: "10000", crime: "Desobediência", desc: "" },
  { pena: "15", multa: "10000", fianca: "X", crime: "Desacato", desc: "" },
]

export const admistrativoJ = [
  { pena: "5", multa: "3000", fianca: "5000", crime: "Comunicação falsa de crime ou contravenção", desc: "(Trote)" },
  { pena: "10", multa: "10000", fianca: "15000", crime: "Falso testemunho em juízo", desc: "" },
  { pena: "15", multa: "5000", fianca: "X", crime: "Fuga de pessoa presa", desc: "" },
  { pena: "30", multa: "5000", fianca: "X", crime: "Abuso de poder/autoridade", desc: "" },
]

export const vestimenta = [
  { pena: "10", multa: "5000", fianca: "15000", crime: "Uso de equipamento militar", desc: "(Coldre/Colete)" },
  { pena: "5", multa: "1500", fianca: "3500", crime: "Máscara", desc: "(Salvo para prevenção do Covid-19(Laudo Médico))" },
]

export const armas = [
  { pena: "25", multa: "15000", fianca: "25000", crime: "Arma de alto porte", desc: "(fuzil/ak)" },
  { pena: "20", multa: "10000", fianca: "25000", crime: "Arma de médio porte", desc: "(metralhadora e sub-metralhadora shotgun)" },
  { pena: "15", multa: "5000", fianca: "15000", crime: "Arma de baixo porte", desc: "(pistola e revolver)" },
  { pena: "0", multa: "1500", fianca: "X", crime: "Arma branca", desc: "(facas e objetos cortantes)" },
]

export const municao = [
  { pena: "0", multa: "1500", fianca: "X", crime: "Munição de alto porte", desc: "(fuzil Munição inferior a 50 und)" },
  { pena: "0", multa: "1000", fianca: "X", crime: "Munição de médio porte", desc: "(metralhadora e shotgun Munição inferior a 50 und)" },
  { pena: "0", multa: "500", fianca: "X", crime: "Munição de baixo porte", desc: "(pistola e revolver Munição inferior a 50 und)" },
]

export const itensIlegais = [
  { pena: "10", multa: "4000", fianca: "8000", crime: "Algemas", desc: "" },
  { pena: "5", multa: "2000", fianca: "5000", crime: "Capuz", desc: "" },
  { pena: "10", multa: "4000", fianca: "12000", crime: "Lockpick", desc: "" },
  { pena: "12", multa: "5000", fianca: "15000", crime: "Masterpick", desc: "" },
  { pena: "10", multa: "5000", fianca: "X", crime: "Colete Balístico", desc: "" },
  { pena: "10", multa: "5000", fianca: "15000", crime: "C4", desc: "" },
]