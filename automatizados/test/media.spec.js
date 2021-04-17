const media = require('../src/media');

test('a média entre 10, 9 e 8 tem que ser igual 9', () => {
	const resultado = calculadora.media(10, 9, 8);

	expect(resultado).toEqual(9);
});