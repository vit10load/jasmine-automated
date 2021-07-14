describe('Teste do to equal', () => {
    it('Deve garantir que o teste seja toEqual...', () => {
        var obj = { valor: true };
        var obj2 = { valor: true };

        expect(true).toEqual(true);

        expect(obj).toEqual(obj2);
    });
});