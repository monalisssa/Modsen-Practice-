
const isWholeNumber = (numb) =>
{
  if(!Number.isInteger(numb)) throw new Error("Ошибка! Не целое число!")
  else console.log("Число целое")
}

isWholeNumber(4)
isWholeNumber(4.5)