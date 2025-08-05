//Необходимо создать дженериковую функцию, которая принимает массив любого типа и значение того же типа, и возвращает новый массив с добавленным значением, если его там нет. Если значение уже есть в массиве, функция должна вернуть массив без изменений.
//
// Требования
// Функция должна быть дженериковой и работать с массивами любого типа.
// Для проверки наличия элемента в массиве использовать метод includes.
// Тип массива и тип элемента должны быть связаны через дженерики.
// Функция должна быть чистой (не изменять оригинальный массив).

// Строки
const stringArray = ['apple', 'banana', 'cherry']
const result1 = updateArray(stringArray, 'banana') // ['apple', 'banana', 'cherry']
const result2 = updateArray(stringArray, 'date') // ['apple', 'banana', 'cherry', 'date']

// Числа
const numberArray = [1, 2, 3]
const result3 = updateArray(numberArray, 2) // [1, 2, 3]
const result4 = updateArray(numberArray, 4) // [1, 2, 3, 4]

function updateArray<T>(arr: Array<T>, val: T): Array<T> {
    if (!arr.includes(val)) {
        return [...arr, val]
    } else {
        return [...arr]
    }
}

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
