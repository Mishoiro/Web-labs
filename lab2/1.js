function average(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log("Average:", average(2, 4, 6, 8));
