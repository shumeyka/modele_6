// 1  ЗАДАНИЕ
const str = 'Дерево'
const cleanStr = str.toLowerCase()

let reverse = ''
for (let i = cleanStr.length - 1; i >= 0; i--) {
	reverse = reverse + cleanStr[i]
}

if (cleanStr === reverse) {
	console.log(`Слово ${str} является палиндромом`)
} else {
	console.log(`Слово ${str} не является палиндромом`)
}

// 2 ЗАДАНИЕ

// 1 СПОСОБ

// const arr = [1, 2, 3, 1, 2, 1]
// const arr2 = [...new Set(arr)]
// console.log(arr, arr2)

// 2 СПОСОБ

const arr = [1, 2, 3, 1, 2, 1]
const arr2 = []
for (let i = 0; i < arr.length; i++) {
	if (!arr2.includes(arr[i])) {
		arr2.push(arr[i])
	}
}
console.log(arr, arr2)

// 3 ЗАДАНИЕ

let anyNum = prompt('Введите число')

if (isNaN(anyNum)) {
	alert('Вы ввели не число. Попробуйте еще раз')
} else {
	alert('Вы ввели число')
	;+anyNum
}

let arr = []

for (i = 0; i <= anyNum; i++) {
	arr.push(i)
}

alert(arr)

// 4 ЗАДАНИЕ

const boardSize = 3 //размерность игрового поля
const board = [] //игровое поле

//заполняем игровое поле строками с крестиками и ноликами
for (let i = 0; i < boardSize; i++) {
	const row = [] //строка игрового поля

	//заполняем строку игрового
	for (let j = 0; j < boardSize; j++) {
		row.push(Math.random() < 0.3 ? 'X' : 'O') //заполняем строку игрового поля случайным набором крестиков и ноликов
	}

	board.push(row) //заполняем игровое поле строками
	console.log(board[i].join(' ')) //выводим каждую из строк игрового поля в консоль
}

// 5 ЗАДАНИЕ

const obj = {
	some: 'some',
	dom: 'text',
	arr: [1, 2, 3, 4, 5],
	tom: 'there',
}

const arrValues = []

//обходим ключи объекта
for (let key in obj) {
	//проверяем, является ли свойство массивом
	if (Array.isArray(obj[key])) {
		//обходим свойство-массив и добавляем каждый элемент этого массива в arrValues
		for (let i = 0; i < obj[key].length; i++) {
			arrValues.push(obj[key][i])
		}
	} else {
		arrValues.push(obj[key])
	}
	console.log(arrValues)
}
