import express from 'express';

const app = express();
const Port = 3003;

app.get('/', (req, res)=>{
    res.send("Server is running fine!");
})

app.listen(Port, ()=>{
    console.log(`Server is listening on http://localhost:${Port}/`);
})