function isJSFile(filename) {
  return filename.endsWith(".js");
}

console.log(isJSFile("app.js")); // true
console.log(isJSFile("style.css")); // false
