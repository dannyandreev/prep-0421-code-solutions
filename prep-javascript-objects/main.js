var person = {
  firstName: 'Danny',
  lastName: 'Andreev',
  hobby: 'Kiteboarding'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Business Owner';
console.log("The person's job is: " + person.job);

person.previousJob = 'Engineer';
console.log("The person's previous job was: " + person.previousJob);

console.log(person);

var myCar = {
  make: 'Toyota',
  model: 'Prius',
  year: '2017'
};

console.log(myCar);

myCar['owner'] = fullName;

console.log('The owner of the ' + myCar['year'] + ' ' + myCar['model'] + ' ' + myCar['make'] + ' is ' + myCar['owner'] + '.');

myCar['color'] = 'white';

console.log(myCar);
