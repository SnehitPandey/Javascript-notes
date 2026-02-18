fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


async function getAllUsers(){
   try{
     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
   }catch{
    console.log('failed');
   }
}

getAllUsers();     