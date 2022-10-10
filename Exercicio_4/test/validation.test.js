const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        fabricante: 'Alfa Romeo',
        ano: '1991',
        combustivel: 'Gasolina',
        cambio: 'Manual de 5 marchas',
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro', () => {
    const result = Validation.create({
        fabricante: 'BMW',
        ano: '2022'
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
