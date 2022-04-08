import validator from 'validator';

export default class Validation {
  constructor() {
    this.form = document.querySelector('form');
    this.inputs = this.form.querySelectorAll('input');
    this.values = {
      client: {},
      product: {},
      active: false,
      date: new Date(),
    };
    this.error = [];
    this.handleMethods();
  }

  handleMethods() {
    this.attributeValues();
  }

  attributeValues() {
    this.deleteError();
    this.checkEmail();
    if (this.error.length > 0) return;
    this.inputs.forEach((input) => {
      if (input.classList.contains('name'))
        this.values.client.name = input.value;
      if (input.classList.contains('surname'))
        this.values.client.surname = input.value;
      if (input.classList.contains('email'))
        this.values.client.email = input.value;
      if (input.classList.contains('product'))
        this.values.product.name = input.value;
      if (input.classList.contains('category'))
        this.values.product.category = input.value;
      if (input.classList.contains('quantity')) {
        const quantity = parseInt(input.value, 10);
        this.values.quantity = quantity;
      }
      if (input.classList.contains('price')) {
        const price = parseFloat(input.value);
        this.values.price = price;
      }
      if (input.classList.contains('active'))
        if (input.checked) this.values.active = true;
    });
  }

  checkLength() {
    this.inputs.forEach((input) => {
      if (!input.value.length > 0)
        this.createError(input, 'Preencha esse campo');
    });
  }

  checkEmail() {
    this.checkLength();
    if (this.error.length > 0) return;
    this.inputs.forEach((input) => {
      if (input.classList.contains('email'))
        if (!validator.isEmail(input.value))
          this.createError(input, 'Email invalido');
    });
  }

  createError(input, msg) {
    const error = document.createElement('div');
    error.classList.add('error-text');
    error.innerText = msg;
    input.parentNode.appendChild(error);
    this.error.push(msg);
  }

  deleteError() {
    const error = this.form.querySelectorAll('.error-text');
    error.forEach((erro) => {
      erro.remove();
    });
  }
}
