import express from 'express';
import cors from 'cors';
import Banknifty from './ApiFetch/banknifty'

const app=express();
 
app.use(cors({origin:'*'}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World');

})

app.get('/new',async(req,res)=>{
    const fetchData= await Banknifty
    res.json(fetchData);

})


app.listen(8080,()=>{
    console.log("server run at 8000");
})