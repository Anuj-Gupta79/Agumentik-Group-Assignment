import express from 'express';
import mongodb from './db';

const app = express();
const Port = 3003;

mongodb();

app.get('/', (req, res)=>{
    res.send("Server is running fine!");
})

app.listen(Port, ()=>{
    console.log(`Server is listening on http://localhost:${Port}/`);
})