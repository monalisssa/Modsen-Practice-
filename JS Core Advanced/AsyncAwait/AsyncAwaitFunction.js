const fetchUsers = async () =>
{
  let response = await fetch("https://jsonplaceholder.typicode.com/users")
  return await response.json()
  
}

fetchUsers().then(data => console.log(data))