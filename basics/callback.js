
// setTimeout(()=>{
// console.log("node")  
// },5000);

// setInterval(()=>{
//     console.log("surrekli calisma");
// },1000)

// const sayHi = (cb) => {
//     cb();
// }

// sayHi(()=>{
//     console.log("Hello");
// });

import fetch from "node-fetch";
import axios from "axios";


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("users load")
// })
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(data => data.json()).then(posts => console.log("Posts load!",posts))

// (async function () {

//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

//     const { data: post1 } = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
// });



// (async () => {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

//     const { data: post1 } = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
// })();

// console.log("users", users);
// console.log("post1", post1);
// console.log("post2", post2);

const getComments = (number) => {
    return new Promise(async (resolve, reject)=>{

        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data)
    });
};

getComments(5)
.then((data)=> console.log(data))
.catch(e => console.log(e));