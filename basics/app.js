import axios from "axios";

const getData = (number) => {
    
    (async () => {
        const { data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+number);
        console.log(`User ${number} Loaded` ,user)
    });

    (async () => {
        const { data: post} = await axios("https://jsonplaceholder.typicode.com/posts?"+number);
        console.log(`Post ${number} Loaded`, post)
    });

};

getData(1);