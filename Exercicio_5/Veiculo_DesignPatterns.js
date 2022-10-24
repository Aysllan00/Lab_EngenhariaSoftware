const Onibus = (placa, assentos, ano) => ({
    placa, 
    assentos,
    ano,
    setPlaca: () => (placa),
    setAno: () => (ano),
    setAssentos: () => (assentos),
    getPlaca: () => (placa),
    getAno: () => (ano),
    getAssentos: () => (assentos),
    exibirDados: () => ({placa, assentos, ano})
})

const onibus = Onibus('OXU-0981', 2009, 20);
console.log(onibus.exibirDados())
