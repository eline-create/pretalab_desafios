const media = require('../src/media');

test('a média tem que ser igual 7', () => {
	const resultado = media(10,9,8);

	expect(resultado).toEqual(7);
});

