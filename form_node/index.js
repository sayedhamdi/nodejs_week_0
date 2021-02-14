const express = require("express")
const app = express()

app.use(express.static('public'))

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname + '/' + 'index.html' );
})
app.post('/formulaire',(req,res)=>{
    // ekhdem khedmtek 
    let firstname = req.query.firstname
    let lastname = req.query.lastname
    console.log(firstname,lastname)
    res.end(JSON.stringify(
        {'firstname':firstname,
        lastname:lastname
    }))
})
const server = app.listen(3000,()=>{
    console.log("listening on port ...")
})