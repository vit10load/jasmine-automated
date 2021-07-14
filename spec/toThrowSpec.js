describe('Teste de throw error', () => {
    it('Deve descrever o tipo throw error', () => {

        var action = function() {
            return numero * 10;
        };

        var val = 100;

        var action2 = function() {
            return val * 1;
        };

        var action3 = function() {
            return umValorQualquer * 2;
        };

        //false
        expect(action2).not.toThrow();

        expect(action3).toThrow();

    });
});