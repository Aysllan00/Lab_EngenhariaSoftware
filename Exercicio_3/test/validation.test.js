const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: 'O Homem do Norte',
        produtora: 'Universal Studios',
        atores: 'Jarin Blaschke',
        ano: '2022',
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro', () => {
    const result = Validation.create({
        nome: 'Animais Fantásticos',
        produtora: 'Warner Bros. Pictures'
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
