//Ayslan Conti Serafini Costa - GEC/1584
//Atividade 1

class Veiculo{
    #placa = String;
    #ano = Number;

    constructor(placa, ano){
        this.#placa = placa;
        this.#ano = ano;
    }

    setPlaca(placa){
        this.#placa = placa;
    }
    setAno(ano){    
        this.#ano = ano;
    }
    setAno(ano){
        this.#ano = String(ano)
    }
    getPlaca(){
        return this.#placa;  
    }
    getAno(){
        return this.#ano;
    }
    exibirDados(){
        console.log(`Placa: ${this.#placa}`);
        console.log(`Ano: ${this.#ano}`);
    }

}

class Onibus extends Veiculo{
    #assentos = Number;

    constructor(placa, ano, assentos){
        super(placa, ano);
        this.#assentos = assentos;
    }

    setAssentos(assentos){
        this.#assentos = assentos;
    }
    getAssentos(){
        return this.#assentos;
    }
    exibirDados(){
        super.exibirDados();
        // console.log(`Placa: ${this.placa}`);
        // console.log(`Ano: ${this.ano}`);
        console.log(`Assentos: ${this.#assentos}`);

    }
}

class Caminhao extends Veiculo{
    #eixos = Number;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.#eixos = eixos;
    }

    setEixos(eixos){
        this.#eixos = eixos;
    }
    getEixos(){
        return this.#eixos;
    }
    exibirDados(){
        super.exibirDados();
        // console.log(`Placa: ${this.placa}`);
        // console.log(`Ano: ${this.ano}`);
        console.log(`Eixos: ${this.#eixos}`);
    }
}

const onibus = new Onibus('OXU-0981', 2009, 20);
onibus.exibirDados();

console.log('     ')

const caminhao = new Caminhao('ABE-3703', 2004, 4);
caminhao.exibirDados();