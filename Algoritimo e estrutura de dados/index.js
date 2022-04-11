// Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]

const value = ['a', 10, 'b', 'hola', 122, 15];

class ArrayFunc {
  constructor(array) {
    this.array = array;
  }

  onlyString() {
    const strings = this.array.filter((value) => {
      if (typeof value === 'string') return value;
    });
    return strings;
  }

  onlyNumbers() {
    this.numbers = this.array.filter((value) => {
      if (typeof value !== 'string') return value;
    });
    return this.numbers;
  }

  maxNumber() {
    this.onlyNumbers();
    const maxNum = Math.max(...this.numbers);
    return maxNum;
  }
}
const instace = new ArrayFunc(value);

// Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão

class Calculator {
  constructor() {}

  static sum(array) {
    const result = array.reduce((accumulator, value) => {
      return (accumulator += value);
    });
    return result;
  }

  static subtraction(array) {
    const result = array.reduce((accumulator, value) => {
      return (accumulator -= value);
    });
    return result;
  }

  static multiplicationArray(array) {
    const result = array.reduce((accumulator, value) => {
      return (accumulator *= value);
    });
    return result;
  }

  static multiplication(a, b) {
    return a * b;
  }

  static division(a, b) {
    b = parseFloat(b);
    if (b === 0) {
      console.log('a');
      return 'Divisor não pode ter o valor 0';
    }
    return a / b;
  }
}

// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC

function generateId() {
  let id = '';
  const alphaNumerics =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 19; i++) {
    if (i === 4 || i === 9 || i === 14) id += '-';
    id += alphaNumerics.charAt(
      Math.floor(Math.random() * alphaNumerics.length)
    );
  }
  return id;
}

document.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('btn-atv-1')) {
    const resultAtv1 = document.querySelectorAll('.result-atv-1');
    resultAtv1.forEach((value) => {
      if (value.classList.contains('onlyStrings'))
        value.innerText = instace.onlyString();
      if (value.classList.contains('onlyNumbers'))
        value.innerText = instace.onlyNumbers();
      if (value.classList.contains('maxNumber'))
        value.innerText = instace.maxNumber();
    });
  }

  if (element.classList.contains('btn-atv-3')) {
    const resultAtv3 = document.querySelector('.result-atv-3');
    resultAtv3.innerText = generateId();
  }
});

document.addEventListener('submit', (e) => {
  const element = e.target;
  e.preventDefault();

  if (element.classList.contains('atv-2-arrays')) {
    try {
      const value = document.querySelector('.array-atv-2');
      const arrayNumStr = value.value.split(',');
      const arrayNum = [];
      arrayNumStr.forEach((value) => {
        return arrayNum.push(parseFloat(value));
      });
      insertArray(arrayNum);
    } catch (e) {
      console.log(e);
    }
  }
  if (element.classList.contains('atv-2-params')) {
    try {
      const operating = document.querySelector('.operating').value;
      const operator = document.querySelector('.operator').value;
      insertParam(operating, operator);
    } catch (e) {
      console.log(e);
    }
  }
});

function insertArray(array) {
  const resultAtv2 = document.querySelectorAll('.result-atv-2');
  resultAtv2.forEach((value) => {
    if (value.classList.contains('sum'))
      value.innerText = Calculator.sum(array);
    if (value.classList.contains('subtraction'))
      value.innerText = Calculator.subtraction(array);
    if (value.classList.contains('multiplicationArray'))
      value.innerText = Calculator.multiplicationArray(array);
  });
}

function insertParam(a, b) {
  const resultAtv2 = document.querySelectorAll('.result-atv-2');
  resultAtv2.forEach((value) => {
    if (value.classList.contains('multiplication'))
      value.innerText = Calculator.multiplication(a, b);
    if (value.classList.contains('division'))
      value.innerText = Calculator.division(a, b);
  });
}