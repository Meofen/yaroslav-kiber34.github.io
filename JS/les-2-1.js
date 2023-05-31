var animals = ['Cat', 'Dog', 'Cow', 'Fish']
alert(animals)

//.push - добавляет элемент в конец массива
animals.push('Horse')
alert(animals)

//.unshift - добавляет элемент в начало массива
animals.unshift('Goose')
alert(animals)


//.pop - удаляет последний элемент массива
animals.pop()
alert(animals)

//.shift - удаляет первый элемент массива
animals.shift()
alert(animals)

dop = prompt('Введите животное')

if(animals + dop){
    alert(animals)
}