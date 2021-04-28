var languageArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languageArray);

console.log(languageArray.length);

languageArray.push('C#', 'php');
console.log(languageArray);

languageArray.pop();
console.log(languageArray);

languageArray.unshift('C++');
console.log(languageArray);

languageArray.shift('C++');
console.log(languageArray);

var thirdElement = languageArray[2];
console.log(thirdElement);

var arrayLength = languageArray.length;
console.log(arrayLength);

var lastItem = languageArray[arrayLength - 1];
console.log(lastItem);
