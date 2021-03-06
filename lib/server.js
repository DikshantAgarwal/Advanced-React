import express from 'express';
import  config from'./config';
import ServerRender from './renderer/Server'
import {data } from './testData.json';

const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', async (req,res)=>{
const initialContent = await ServerRender();
res.render('index',{...initialContent});
})

app.get('/data',(req,res)=>{
    res.send(data);
    })
app.listen(config.port,()=>{
    console.info(`Running on ${config.port}`);
})