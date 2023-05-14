function clearDOM() {
	document.body.innerHTML = "";
	const errElem = document.createElement('p');
	const errText = document.createTextNode("Dev-Tools are deactivated on this site.");
	errElem.appendChild(errText);
	document.body.appendChild(errText);
}

console.log(Object.defineProperties(new Error, {
	message: {get() {clearDOM()}}
}));
