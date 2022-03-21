export default function (search) {
	return new Proxy(new URLSearchParams(search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
}