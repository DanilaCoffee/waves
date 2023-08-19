let numberOfCelss = 3040

let cellsArray = []

for (let i = 0; i < numberOfCelss; i++) {
	cellsArray[i] = 0
}

let mainBlock = document.querySelector('.main')

for (let i = 0; i < numberOfCelss; i++) {
	mainBlock.innerHTML += '<div class="cell"></div>'
}

let cells = document.getElementsByClassName('cell')

for (let i = 0; i < numberOfCelss; i++) {
	cells[i].addEventListener('click', () => {
		cells[i].classList.add('active')
		cellsArray[i] = 1
	})
}

let render = () => {
	for (let i = 0; i < numberOfCelss; i++) {
		if (cellsArray[i] > 0 && cellsArray[i] < 10) {
			if (cellsArray[i] > 0 && cellsArray[i] < 4) {
				cells[i].classList.add('active')
			} else {
				cells[i].classList.remove('active')
			}
			cellsArray[i]++
		}
		if (cellsArray[i] > 6) {
			cellsArray[i] = 0
		}
		//cells[i].innerHTML = cellsArray[i]
	}
}

let inRange = (a) => {
	if (a > numberOfCelss || a < 0) {
		return false
	} else {
		return true
	}
}

setInterval(() => {
	for (let i = 0; i < numberOfCelss; i++) {
		if (cells[i].classList.contains('active')) {
			if (cellsArray[i+1] == 0 && inRange(i+1)) cellsArray[i+1] = 1
			if (cellsArray[i-1] == 0 && inRange(i-1)) cellsArray[i-1] = 1
			if (cellsArray[i+80] == 0 && inRange(i+80)) cellsArray[i+80] = 1
			if (cellsArray[i-80] == 0 && inRange(i-80)) cellsArray[i-80] = 1
		}
	}
	render()
}, 90)