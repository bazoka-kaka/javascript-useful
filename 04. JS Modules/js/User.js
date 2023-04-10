export default class User {
  constructor(email, name) {
    this._email = email;
    this._name = name;
  }

  greeting() {
    return `Hello, my name is ${this._name}`;
  }
}
