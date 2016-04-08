function Person(_firstName, _lastName, _age) {
  let firstName = _firstName;
  let lastName = _lastName;
  let age = _age;

  function getFullName() {
    return firstName + ' ' + lastName;
  }

  function getFirstName() {
    return firstName;
  }

  function setFirstName(value) {
    firstName = value;
  }

  function getLastName() {
    return lastName;
  }

  function setLastName(value) {
    lastName = value;
  }

  function getAge() {
    return age;
  }

  function setAge(value) {
    age = value;
  }

  function isUnderAge() {
    return age < 18;
  }

  return function method(methodName) {
    switch (methodName) {
      case 'getFullName':
        return getFullName;
      case 'getFirstName':
        return getFirstName;
      case 'setFirstName':
        return setFirstName;
      case 'getLastName':
        return getLastName;
      case 'setLastName':
        return setLastName;
      case 'getAge':
        return getAge;
      case 'setAge':
        return setAge;
      case 'isUnderAge':
        return isUnderAge;
      default:
        throw methodName + ' is not a function';
    }
  };
}

const john = Person('John', 'Smith', 25);
console.log(john('getFullName')()); // John Smith
console.log(john('getAge')()); // 25
john('setAge')(18);
console.log(john('getAge')()); // 18
console.log('Is John under age? ' + john('isUnderAge')());
