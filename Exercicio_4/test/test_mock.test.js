const { UserModel } = require('../src/infrastructure/database');
const user = require('../src/port/user_repository');


describe('create', () => {
    it('Valid User', async () => {
        UserModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 51,
                fabricante: "Pagani",
                ano: "2017",
                combustivel: "Combustivel",
                cambio: "Automatizado de 7 marchas",
            }),
        }));

        expect(await user.create({
            id: 51,
            fabricante: "Pagani",
            ano: "2017",
            combustivel: "Combustivel",
            cambio: "Automatizado de 7 marchas"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                fabricante: expect.any(String),
                ano: expect.any(String),
                combustivel: expect.any(String),
                cambio: expect.any(String),
            }),
        );
    });
});