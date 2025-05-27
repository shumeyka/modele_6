// 2 ЗАДАНИЕ
const arr = [
	1,
	2,
	3,
	1,
	5,
	4,
	2,
	3,
	5,
	'they',
	"don't",
	'know',
	'that',
	'we',
	'know',
	'that',
	'they',
	'know',
]
const arr2 = []
for (let i = 0; i < arr.length; i++) {
	if (!arr2.includes(arr[i])) {
		arr2.push(arr[i])
	}
}
console.log(arr2)
