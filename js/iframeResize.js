const iframes = document.querySelectorAll('iframe[resize]');

let myObserver = new ResizeObserver(entries => iframeResize(entries));
iframes.forEach(iframe => {
	iframe.onload = function() {
		myObserver.observe(this.contentDocument.body);
		this.contentDocument.body.iframeNode = this;
	}
});

function iframeResize(entries) {
	for (let entry of entries) {
		entry.target.iframeNode.height = Math.round(entry.contentRect.height) + "px";
	}
}