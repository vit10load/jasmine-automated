describe('Teste de throw error', () => {
    it('Deve lançar e tratar erro de validação', () => {

        var somar = function(n1, n2) {
            if (n1 <= 0) {
                throw new TypeError("Intervalo de valores deve ser maior que zero");
            }
        }
        somar.n1 = 1;
        somar.n2 = 2;

        expect(somar).not.toThrowError(TypeError, "Intervalo de valores deve ser maior que zero");
    });
});