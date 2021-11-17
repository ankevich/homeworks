function parseCount(value) {
  let result = Number.parseInt(value);
  if (Number.isNaN(result)) throw new Error("Невалидное значение");
  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задание 2
class Triangle {
  constructor(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
      this.a = a;
      this.b = b;
      this.c = c;
    } else {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea(){
      let p = (this.a + this.b + this.c)/2
      let area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))
      return Number.parseFloat(area.toFixed(3))
  }
}

// function getTriangle(a, b, c){
//     try {
//         return new Triangle(this.a, this.b, this.c)
//     }
// }
