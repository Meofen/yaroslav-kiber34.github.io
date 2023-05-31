function square_perimeter(side) {
    return side*4;
}

function square_square(side) {
    return side*side;
}

function cube(side) {
    function square() {
        return side*side;
    }

    return square()*side
}

otvet = prompt('Введите кол-во сторон куба')
alert('Число в кубе: ' + cube(otvet))
//alert('Площадь: ' + square_square(otvet) + ' Периметр: ' + square_perimeter(otvet))