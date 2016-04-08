function Person(_firstName, _lastName, _age) {
  let firstName = _firstName;
  let lastName = _lastName;
  let age = _age;

  const methods = [];

  methods['getFullName'] = function() {
    return firstName + ' ' + lastName;
  }

  methods['getFirstName'] = function() {
    return firstName;
  }

  methods['setFirstName'] = function(value) {
    firstName = value;
  }

  methods['getLastName'] = function() {
    return lastName;
  }

  methods['setLastName'] = function(value) {
    lastName = value;
  }

  methods['getAge'] = function() {
    return age;
  }

  methods['setAge'] = function(value) {
    age = value;
  }

  methods['isUnderAge'] = function() {
    return age < 18;
  }

  return methods;
}

const juan = Person('Juan', 'Perez', 25);
console.log(juan.getFullName()); // Juan Perez
console.log(juan['getFullName']()); // Juan Perez
console.log('Is juan under age? ' + juan.isUnderAge());
