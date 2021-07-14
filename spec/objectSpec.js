describe('Descrevendo objetos para teste', () => {
    it('Deve garatir que objetos não sejam iguais', () => {
        var ob1 = {
            nome: "Vitor",
            sobreNome: "Silva"
        };

        var ob2 = {
            nome: "Ronaldo",
            sobreNome: "Fenomeno"
        };

        expect(ob2).not.toBe(ob1);
    });
});