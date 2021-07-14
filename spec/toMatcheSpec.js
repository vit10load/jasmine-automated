describe('Teste do to match', () => {
    it('Deve validar o uso do to match', () => {
        var texto = "Ola, vitor silva";

        expect(texto).toMatch(/Vitor/i);

        var valor = '3.141';

        var reg = new RegExp(/\d+(?!\.)/);

        var arr = valor.match(reg);

        expect(141).toEqual(Number.parseInt(arr[0]));

        expect("79400-000").toMatch(/^\d{5}-\d{3}$/);

    });
});