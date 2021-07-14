describe('Teste do to br truthy', () => {
    it('Deve demonstrar o to be truthy', () => {
        var ob = 1;
        var n1 = undefined;

        let object = NaN;

        expect(ob).toBeTruthy();

    });
});