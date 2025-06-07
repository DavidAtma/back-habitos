import express, { Application, Request, Response } from 'express';

const app : Application = express();

app.use(express.json());


app.use ('/habito',(req:Request , res: Response)=> {
    console.log('Params:',req.params);
    console.log('Query:',req.query);
    console.log('Body:',req.body);
    res.send ('Hola, proyecto habito');
});


export default app;
