function createChecker(arr) {
  return function (text) {
    return arr.includes(text);
  };
}

const checkWord = createChecker(["apple", "banana", "orange"]);
console.log(checkWord("banana"));
console.log(checkWord("grape"));
