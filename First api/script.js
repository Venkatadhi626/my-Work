console.log("concept of !!");
fetch( "https://jsonplaceholder.typicode.com/todos/1" )
.then((res) => res.json())
.then((data) => console.log(data));
const data = {
    title: "this is my title",
    body:"this is post body",
    userID: 1,

};
fetch("https://jsonplaceholder.typicode.com/todos/2", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));