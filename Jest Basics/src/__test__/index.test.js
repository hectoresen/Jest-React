const randomStrings = require('../index');


describe('Probar funcioanlidades de randomStrings', () =>{
    test('Probar funcionalidad', () =>{
        expect(typeof(randomStrings())).toBe('string');
    });
    test('Comprobar que no existe una ciudad', () =>{
        expect(randomStrings()).not.toMatch(/Cordoba/)
    });
});