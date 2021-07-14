describe('Deve demonstrar o uso do toBeDefined', () => {
    it('Deve prevenir variavel undefined', () => {
        var n1 = 1000;

        expect(n1).toBeDefined();

        expect(null).toBeDefined();
        expect(NaN).toBeDefined();

    });
});