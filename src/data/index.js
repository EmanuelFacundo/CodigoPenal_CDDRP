/*
Regex usada para transcrever a base de dados
^(\d+),(\d+),(\w+),([\S/ ]+),?([\S/ ]+)?
{pena: "$1", multa: "$2", fianca: "$3", crime: "$4", desc: "$5, check: false"},
*/

export const data = {
  vestimenta: [
    { pena: "10", multa: "5000", fianca: "15000", crime: "Uso de equipamento militar", desc: "(Coldre/Colete)", check: false },
    { pena: "5", multa: "1500", fianca: "3500", crime: "Máscara", desc: "(Salvo para prevenção do Covid-19 com Laudo Médico)", check: false },
  ],
  transito: [
    { pena: "0", multa: "700", fianca: "0", crime: "Direção Perigosa", desc: "", check: false },
    { pena: "0", multa: "1000", fianca: "0", crime: "Abandono de veículo pessoal", desc: "", check: false },
    { pena: "15", multa: "1500", fianca: "3000", crime: "Abandono de Serviço", desc: "", check: false },
    { pena: "0", multa: "900", fianca: "0", crime: "Estacionar em local proibido", desc: "", check: false },
    { pena: "0", multa: "1000", fianca: "0", crime: "Excesso de velocidade", desc: "", check: false },
    { pena: "10", multa: "5000", fianca: "10000", crime: "Tentativa de fuga com Veículo", desc: "", check: false },
    { pena: "0", multa: "500", fianca: "0", crime: "Conduzir sem capacete", desc: "", check: false },
    { pena: "0", multa: "500", fianca: "0", crime: "Sinal Vermelho", desc: "", check: false },
    { pena: "5", multa: "15000", fianca: "30000", crime: "Poluição Sonora", desc: "", check: false },
  ],
  honra: [
    { pena: "12", multa: "4000", fianca: "13000", crime: "Injuria", desc: "", check: false },
    { pena: "10", multa: "4000", fianca: "13000", crime: "Calunia", desc: "", check: false },
    { pena: "20", multa: "15000", fianca: "30000", crime: "Assédio", desc: "", check: false },
    { pena: "10", multa: "3000", fianca: "10000", crime: "Difamação", desc: "", check: false },
  ],
  pazPublica: [
    { pena: "10", multa: "10000", fianca: "0", crime: "Associação criminosa", desc: "", check: false },
    { pena: "10", multa: "15000", fianca: "0", crime: "Formação de quadrilha", desc: "", check: false },
    { pena: "5", multa: "7000", fianca: "0", crime: "Apologia ao crime", desc: "", check: false },
  ],
  liberdadePessoal: [
    { pena: "8", multa: "2000", fianca: "5000", crime: "Ameaça", desc: "", check: false },
    { pena: "25", multa: "50000", fianca: "0", crime: "Sequestro e Cárcere privado", desc: "", check: false },
    { pena: "10", multa: "3000", fianca: "7500", crime: "Cúmplice", desc: "", check: false },
  ],
  administrativoP: [
    { pena: "10", multa: "7000", fianca: "15000", crime: "Resistência", desc: "", check: false },
    { pena: "4", multa: "8000", fianca: "10000", crime: "Desobediência", desc: "", check: false },
    { pena: "15", multa: "10000", fianca: "0", crime: "Desacato", desc: "", check: false },
  ],
  administrativoJ: [
    { pena: "5", multa: "3000", fianca: "5000", crime: "Comunicação falsa de crime ou contravenção", desc: "(Trote)", check: false },
    { pena: "10", multa: "10000", fianca: "15000", crime: "Falso testemunho em juízo", desc: "", check: false },
    { pena: "15", multa: "5000", fianca: "0", crime: "Fuga de pessoa presa", desc: "", check: false },
    { pena: "30", multa: "5000", fianca: "0", crime: "Abuso de poder/autoridade", desc: "", check: false },
  ],
  periclitacao: [
    { pena: "5", multa: "10000", fianca: "15000", crime: "Omissão de Socorro", desc: "", check: false },
    { pena: "15", multa: "15000", fianca: "0", crime: "Homicídio Culposo", desc: "", check: false },
    { pena: "20", multa: "20000", fianca: "0", crime: "Homicídio Doloso", desc: "", check: false },
    { pena: "5", multa: "4000", fianca: "9000", crime: "Lesão corporal", desc: "", check: false },
    { pena: "6", multa: "15000", fianca: "20000", crime: "Uso irregular do porte de armas", desc: "(Retenção do porte de arma)", check: false },
  ],
  estelionatoOutros: [
    { pena: "10", multa: "2000", fianca: "5000", crime: "Receptação", desc: "", check: false },
  ],
  patrimonio: [
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
  ],
  trafico: [
    { pena: "25", multa: "5000", fianca: "0", crime: "Tráfico de arma de fogo", desc: "(Superior a 2und)", check: false },
    { pena: "15", multa: "5000", fianca: "0", crime: "Tráfico de Órgãos", desc: "(Superior a 3und)", check: false },
    { pena: "10", multa: "5000", fianca: "0", crime: "Tráfico de peça de Armas", desc: "(Superior a 2und)", check: false },
    { pena: "15", multa: "5000", fianca: "0", crime: "Tráfico de munição", desc: "(Superior a 50und.)", check: false },
  ],
  armas: [
    { pena: "25", multa: "15000", fianca: "25000", crime: "Arma de alto porte", desc: "(fuzil/ak)", check: false },
    { pena: "20", multa: "10000", fianca: "25000", crime: "Arma de médio porte", desc: "(metralhadora e sub-metralhadora shotgun)", check: false },
    { pena: "15", multa: "5000", fianca: "15000", crime: "Arma de baixo porte", desc: "(pistola e revolver)", check: false },
    { pena: "0", multa: "1500", fianca: "0", crime: "Arma branca", desc: "(facas e objetos cortantes)", check: false },
  ],
  municao: [
    { pena: "0", multa: "1500", fianca: "0", crime: "Munição de alto porte", desc: "(fuzil Munição inferior a 50 und)", check: false },
    { pena: "0", multa: "1000", fianca: "0", crime: "Munição de médio porte", desc: "(metralhadora e shotgun Munição inferior a 50 und)", check: false },
    { pena: "0", multa: "500", fianca: "0", crime: "Munição de baixo porte", desc: "(pistola e revolver Munição inferior a 50 und)", check: false },
  ],
  itensIlegais: [
    { pena: "10", multa: "4000", fianca: "8000", crime: "Algemas", desc: "", check: false },
    { pena: "5", multa: "2000", fianca: "5000", crime: "Capuz", desc: "", check: false },
    { pena: "10", multa: "4000", fianca: "12000", crime: "Lockpick", desc: "", check: false },
    { pena: "12", multa: "5000", fianca: "15000", crime: "Masterpick", desc: "", check: false },
    { pena: "10", multa: "5000", fianca: "0", crime: "Colete Balístico", desc: "", check: false },
    { pena: "10", multa: "5000", fianca: "15000", crime: "C4", desc: "", check: false },
  ],
  militares: [
    { pena: "15", multa: "20000", fianca: "30000", crime: "Prevaricação", desc: "", check: false },
    { pena: "5", multa: "5000", fianca: "0", crime: "Desobediência a um superior", desc: "", check: false },
    { pena: "15", multa: "5000", fianca: "0", crime: "Baderna na corporação", desc: "", check: false },
    { pena: "15", multa: "10000", fianca: "0", crime: "Insultos ou brincadeiras a um superior", desc: "", check: false },
    { pena: "20", multa: "20000", fianca: "0", crime: "Descumprimento de regras internas", desc: "", check: false },
  ]
}