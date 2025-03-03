const mapArrToStrings = arr => {
	return arr.filter(i => Number.isInteger(i)).map(String)
}

module.exports = mapArrToStrings
