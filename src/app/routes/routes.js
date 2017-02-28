import express from 'express';

const app = express.Router();

app.get('*', (req, res)=>{
    res.sendFile('index.html', {root:'./dist/public/'})
})

export default app;