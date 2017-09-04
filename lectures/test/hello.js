class Student {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(this.name + ' is greeting you!');
    }
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = '--'+value+'--';
    }
  }
  module.exports = Student;
