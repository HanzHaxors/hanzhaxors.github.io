function createOption(dataI) {
	let newElem = document.createElement('option');
	for (const key in dataI) {
		if (dataI.hasOwnProperty(key)) {
			newElem[key] = dataI[key];
		}
	}

	return newElem;
}

async function updateSelect(element, data) {
	let currentSelectedValue = element.value;
	let currentSelectLength = element.options.length;

	for (var i = 0; i < currentSelectLength; i++) {
		if (element.options[i]?.value !== currentSelectedValue)
			element.options[i]?.remove();
	}

	for (const one of data) {
		let newOption = createOption(one);

		element.appendChild(newOption);
		if (newOption.value === currentSelectedValue) {
			element.options[0].remove();
			element.options[element.options.length-1].selected = true;
		}
	}
}
