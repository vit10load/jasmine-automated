describe('Teste com all args de argumentos', () => {

    var Calculadora = {
        somar: function(n1, n2) {}
    }

    beforeAll(() => {

    });

    beforeEach(() => {
        spyOn(Calculadora, "somar");
    });

    it('Teste de indice da chamada do método', () => {
        Calculadora.somar(1, 2);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 2]);
    });

    it('Teste de indide com parametros iguais', () => {
        Calculadora.somar(4, 2);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([4, 2]);
    });


});