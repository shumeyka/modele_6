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
