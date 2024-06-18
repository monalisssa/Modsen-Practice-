
const getCallback = (callback) =>
{
  setTimeout(() => {
    callback()
  }, 2000)
}

const sayHello = () =>
{
  console.log("Привет через 2 секунды")
}

getCallback(sayHello)