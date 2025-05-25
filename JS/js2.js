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
