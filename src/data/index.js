/*
Regex usada para transcrever a base de dados
^(\d+),(\d+),(\w+),([\S/ ]+),?([\S/ ]+)?
{pena: "$1", multa: "$2", fianca: "$3", crime: "$4", desc: "$5, check: false"},
*/

export const transito = [
  { pena: "0", multa: "700", fianca: "X", crime: "Direção Perigosa", check: false },
  { pena: "0", multa: "1000", fianca: "X", crime: "Abandono de veículo pessoal", check: false },
  { pena: "15", multa: "1500", fianca: "3000", crime: "Abandono de Serviço", check: false },
  { pena: "0", multa: "900", fianca: "X", crime: "Estacionar em local proibido", check: false },
  { pena: "0", multa: "1000", fianca: "X", crime: "Excesso de velocidade", check: false },
  { pena: "10", multa: "5000", fianca: "10000", crime: "Tentativa de fuga com Veículo", check: false },
  { pena: "0", multa: "500", fianca: "X", crime: "Conduzir sem capacete", check: false },
  { pena: "0", multa: "500", fianca: "X", crime: "Sinal Vermelho", check: false },
  { pena: "5", multa: "15000", fianca: "30000", crime: "Poluição Sonora", check: false },
]

export const trafico = [
  { pena: "25", multa: "5000", fianca: "X", crime: "Tráfico de arma de fogo", desc: "(Superior a 2und)", check: false },
  { pena: "15", multa: "5000", fianca: "X", crime: "Tráfico de Órgãos", desc: "(Superior a 3und)", check: false },
  { pena: "10", multa: "5000", fianca: "X", crime: "Tráfico de peça de Armas", desc: "(Superior a 2und)", check: false },
  { pena: "15", multa: "5000", fianca: "X", crime: "Tráfico de munição", desc: "(Superior a 50und.)", check: false },
]

export const periclitacao = [
  { pena: "5", multa: "10000", fianca: "15000", crime: "Omissão de Socorro", desc: "", check: false },
  { pena: "15", multa: "15000", fianca: "X", crime: "Homicídio Culposo", desc: "", check: false },
  { pena: "20", multa: "20000", fianca: "X", crime: "Homicídio Doloso", desc: "", check: false },
  { pena: "5", multa: "4000", fianca: "9000", crime: "Lesão corporal", desc: "", check: false },
  { pena: "6", multa: "15000", fianca: "20000", crime: "Uso irregular do porte de armas", desc: "(Retenção do porte de arma)", check: false },
]

export const honra = [
  { pena: "12", multa: "4000", fianca: "13000", crime: "Injuria", desc: "", check: false },
  { pena: "10", multa: "4000", fianca: "13000", crime: "Calunia", desc: "", check: false },
  { pena: "20", multa: "15000", fianca: "30000", crime: "Assédio", desc: "", check: false },
  { pena: "10", multa: "3000", fianca: "10000", crime: "Difamação", desc: "", check: false },
]

export const liberdadePessoal = [
  { pena: "8", multa: "2000", fianca: "5000", crime: "Ameaça", desc: "", check: false },
  { pena: "25", multa: "50000", fianca: "X", crime: "Sequestro e Cárcere privado", desc: "", check: false },
  { pena: "10", multa: "3000", fianca: "7500", crime: "Cúmplice", desc: "", check: false },
]

export const patrimonio = [
  { pena: "10", multa: "5000", fianca: "8000", crime: "Furto", desc: "", check: false },
  { pena: "8", multa: "6000", fianca: "11000", crime: "Roubo", desc: "", check: false },
  { pena: "15", multa: "10000", fianca: "18000", crime: "Tentativa de roubo a loja", desc: "", check: false },
  { pena: "6", multa: "3000", fianca: "7500", crime: "Tentativa de roubo a caixa", desc: "", check: false },
  { pena: "30", multa: "45000", fianca: "80000", crime: "Tentativa de roubo a banco", desc: "", check: false },
  { pena: "25", multa: "35000", fianca: "60000", crime: "Tentativa de roubo a joalheria", desc: "", check: false },
  { pena: "30", multa: "20000", fianca: "32000", crime: "Roubo a loja", desc: "", check: false },
  { pena: "12", multa: "6000", fianca: "15000", crime: "Roubo a caixa", desc: "", check: false },
  { pena: "60", multa: "80000", fianca: "120000", crime: "Roubo a banco", desc: "", check: false },
  { pena: "40", multa: "65000", fianca: "100000", crime: "Roubo a joalheria", desc: "", check: false },
  { pena: "5", multa: "3000", fianca: "20000", crime: "Danificar patrimônio público", desc: "", check: false },
  { pena: "10", multa: "6000", fianca: "25000", crime: "Danificar patrimônio alheio", desc: "", check: false },
]

export const estelionatoOutros = [
  { pena: "10", multa: "2000", fianca: "5000", crime: "Receptação", desc: "", check: false },
]

export const pazPublica = [
  { pena: "10", multa: "10000", fianca: "X", crime: "Associação criminosa", desc: "", check: false },
  { pena: "10", multa: "15000", fianca: "X", crime: "Formação de quadrilha", desc: "", check: false },
  { pena: "5", multa: "7000", fianca: "X", crime: "Apologia ao crime", desc: "", check: false },
]

export const militares = [
  { pena: "15", multa: "20000", fianca: "30000", crime: "Prevaricação", desc: "", check: false },
  { pena: "5", multa: "5000", fianca: "X", crime: "Desobediência a um superior", desc: "", check: false },
  { pena: "15", multa: "5000", fianca: "X", crime: "Baderna na corporação", desc: "", check: false },
  { pena: "15", multa: "10000", fianca: "X", crime: "Insultos ou brincadeiras a um superior", desc: "", check: false },
  { pena: "20", multa: "20000", fianca: "X", crime: "Descumprimento de regras internas", desc: "", check: false },
]

export const administrativoP = [
  { pena: "10", multa: "7000", fianca: "15000", crime: "Resistência", desc: "", check: false },
  { pena: "4", multa: "8000", fianca: "10000", crime: "Desobediência", desc: "", check: false },
  { pena: "15", multa: "10000", fianca: "X", crime: "Desacato", desc: "", check: false },
]

export const administrativoJ = [
  { pena: "5", multa: "3000", fianca: "5000", crime: "Comunicação falsa de crime ou contravenção", desc: "(Trote)", check: false },
  { pena: "10", multa: "10000", fianca: "15000", crime: "Falso testemunho em juízo", desc: "", check: false },
  { pena: "15", multa: "5000", fianca: "X", crime: "Fuga de pessoa presa", desc: "", check: false },
  { pena: "30", multa: "5000", fianca: "X", crime: "Abuso de poder/autoridade", desc: "", check: false },
]

export const vestimenta = [
  { pena: "10", multa: "5000", fianca: "15000", crime: "Uso de equipamento militar", desc: "(Coldre/Colete)", check: false },
  { pena: "5", multa: "1500", fianca: "3500", crime: "Máscara", desc: "(Salvo para prevenção do Covid-19(Laudo Médico))", check: false },
]

export const armas = [
  { pena: "25", multa: "15000", fianca: "25000", crime: "Arma de alto porte", desc: "(fuzil/ak)", check: false },
  { pena: "20", multa: "10000", fianca: "25000", crime: "Arma de médio porte", desc: "(metralhadora e sub-metralhadora shotgun)", check: false },
  { pena: "15", multa: "5000", fianca: "15000", crime: "Arma de baixo porte", desc: "(pistola e revolver)", check: false },
  { pena: "0", multa: "1500", fianca: "X", crime: "Arma branca", desc: "(facas e objetos cortantes)", check: false },
]

export const municao = [
  { pena: "0", multa: "1500", fianca: "X", crime: "Munição de alto porte", desc: "(fuzil Munição inferior a 50 und)", check: false },
  { pena: "0", multa: "1000", fianca: "X", crime: "Munição de médio porte", desc: "(metralhadora e shotgun Munição inferior a 50 und)", check: false },
  { pena: "0", multa: "500", fianca: "X", crime: "Munição de baixo porte", desc: "(pistola e revolver Munição inferior a 50 und)", check: false },
]

export const itensIlegais = [
  { pena: "10", multa: "4000", fianca: "8000", crime: "Algemas", desc: "", check: false },
  { pena: "5", multa: "2000", fianca: "5000", crime: "Capuz", desc: "", check: false },
  { pena: "10", multa: "4000", fianca: "12000", crime: "Lockpick", desc: "", check: false },
  { pena: "12", multa: "5000", fianca: "15000", crime: "Masterpick", desc: "", check: false },
  { pena: "10", multa: "5000", fianca: "X", crime: "Colete Balístico", desc: "", check: false },
  { pena: "10", multa: "5000", fianca: "15000", crime: "C4", desc: "", check: false },
]