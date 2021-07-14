describe('Teste com spy on', () => {

    var Calculadora = {
        somar: function(n1) {
            return n1 + 10;
        }
    };

    beforeEach(() => {

    });

    beforeAll(() => {
        spyOn(Calculadora, "somar");
    });

    it('Teste se método somar não for chamado', () => {
        expect(Calculadora.somar).not.toHaveBeenCalled();
    });

    Calculadora.somar(10);

});