// const str = 'Довод'
// let reverse = ''
// for (let i = str.length - 1; i >= 0; i--) {
// 	reverse = reverse + str[i]
// }
// if (str.toLowerCase() === reverse.toLowerCase()) {
// 	console.log('палиндром', reverse)
// } else {
// 	console.log('не палиндром')
// }

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
