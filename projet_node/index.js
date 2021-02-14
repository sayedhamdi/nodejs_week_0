
const express = require('express')
const { stringify } = require('querystring')
const app = express() 

const hostname = '127.0.0.1'
const port = 4000



app.get('/',(req,res)=>{
    req.url 
    req.body 
    const people = [{
        name:'sayed',
        lastname:'hamdi',
        age:22
        },
        {
            name:'ahmed',
            lastname:'ben ali',
            age:33
        },
    ]
    res.send(JSON.stringify(people));
})

/*
const server = http.createServer((req, res) => {
    res.statusCode = 200
    if (req.url === "/") {
        res.end("Home page");
    }
    if (req.url === "/about") {
        res.end("Page about");
    }
    if (req.url === "/contact") {
        res.end("Page contact");
    }

})

*/
server.listen(port, hostname, () => {
    console.log(`server is running at http:${hostname}:${port}`);
})