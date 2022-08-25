const validate = require('validate.js'); //Importar modulo de validação
const VariavelConstraint = require('./validate');

const Calculadora = {
    soma(n1, n2){
        const validateNumero_1 = validate({ n1 },  VariavelConstraint.variavelConstraint);        
        const validateNumero_2 = validate({ n2 },  VariavelConstraint.variavelConstraint);        

        if(validateNumero_1 !== undefined){
            return 'Error';
        }
        if(validateNumero_2 !== undefined){
            return 'Error';
        }
        let s = n1 + n2;
        return s;
    },

    subtracao(n1, n2){
        const validateNumero_1 = validate({ n1 },  VariavelConstraint.variavelConstraint);        
        const validateNumero_2 = validate({ n2 },  VariavelConstraint.variavelConstraint);        

        if(validateNumero_1 !== undefined){
            return 'Error';
        }
        if(validateNumero_2 !== undefined){
            return 'Error';
        }
        let su = Math.abs(n1 - n2);
        return su;
    },

    multiplicacao(n1, n2){
        const validateNumero_1 = validate({ n1 },  VariavelConstraint.variavelConstraint);        
        const validateNumero_2 = validate({ n2 },  VariavelConstraint.variavelConstraint);        

        if(validateNumero_1 !== undefined){
            return 'Error';
        }
        if(validateNumero_2 !== undefined){
            return 'Error';
        }
        let m = n1 * n2;
        return m;
    },

    divisao(n1, n2){
        const validateNumero_1 = validate({ n1 },  VariavelConstraint.variavelConstraint);        
        const validateNumero_2 = validate({ n2 },  VariavelConstraint.variavelConstraint);        

        if(validateNumero_1 !== undefined){
            return 'Error';
        }
        if(validateNumero_2 !== undefined){
            return 'Error';
        }
        let d = n1 / n2;
        return d;
    },

    potencia(n1, n2){
        const validateNumero_1 = validate({ n1 },  VariavelConstraint.variavelConstraint);        
        const validateNumero_2 = validate({ n2 },  VariavelConstraint.variavelConstraint);        

        if(validateNumero_1 !== undefined){
            return 'Error';
        }
        if(validateNumero_2 !== undefined){
            return 'Error';
        }
        let p = (n1 ** n2);
        return p;
    }

};

module.exports = Calculadora;
