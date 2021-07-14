describe('Teste para retorno de valores da função', () => {

    var Calculadora = {
        somar: function() {
            return 10;
        }
    }

    beforeAll(() => {

    });

    beforeEach(() => {
        spyOn(Calculadora, "somar").and.returnValue(10)
    });


    it('Deve ser chamado', () => {
        Calculadora.somar();

        expect(Calculadora.somar).toHaveBeenCalled();
    });

    it('Deve ser igual ao retorno da função', () => {
        expect(Calculadora.somar()).toEqual(10);
    });
});