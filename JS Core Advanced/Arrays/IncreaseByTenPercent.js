const increaseByTenPercent = (arr) =>
{
  return arr.map(x => x + 0.1 * x)
}

const example_arr = [10,20,30,40,50,60]

console.log(changeArray(example_arr))