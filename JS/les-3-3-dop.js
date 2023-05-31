function half_perimeter() {
    return (a+b+c)/2
}

function square(a, b, c) {
    var p = half_perimeter()
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}

var a = (prompt('Введите сторону А'))
var b = (prompt('Введите сторону B'))
var c = (prompt('Введите сторону C'))

alert('Площадь треугольника: ' + square(a, a, c))