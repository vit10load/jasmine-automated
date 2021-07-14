describe('Teste do to be undefined', () => {
    it('Deve ser undefined', () => {
        var ob = { nome: '' };
        expect(ob.nome).not.toBeUndefined();
    });
});