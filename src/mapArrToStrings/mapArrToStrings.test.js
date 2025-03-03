const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToString', () => {
	test('Корректное значение', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
	})
	test('Каша', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1','2','3'])
	})
	test('Эмпти арай', () => {
		expect(mapArrToStrings([])).toEqual([])
	})
	test('Отрицание', () => {
		expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4])
	})
})
