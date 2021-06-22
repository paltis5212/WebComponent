const QueryParams = getQueryParams()

window.onload = iframeResize

let iframeId = QueryParams.iframeId || "mainframe"

console.log(parent.document.getElementById(iframeId))

new ResizeObserver(iframeResize).observe(document.body);

function iframeResize() {
	return parent.document.getElementById(iframeId).height = document.body.scrollHeight + 50
}