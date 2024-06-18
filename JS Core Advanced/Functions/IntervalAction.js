
const intervalAction = () =>
{
  let i = 0
  setInterval(() => {
    if(i<=10) console.log(++i)
  }, 1000)
}

 intervalAction()