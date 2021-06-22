// 解析網址查詢(ex. ?a=b)
function getQueryParams() {
	// 去掉 ?
	let query = window.location.search.slice(1)
	if(query.length === 0) return {}
	query = query.split("&")
	let result = {}
	for(let q of query) {
		let e = q.split("=")
		// one key one value, can't more
		if(e.length > 2) return {}
		result[e[0]] = e[1]
	}
	return Object.freeze(result)
}
