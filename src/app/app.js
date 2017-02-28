import express from 'express';

const app = express();

import routes from './routes/routes';

app.use(express.static('./dist/public/'));

app.use('/', routes);

app.listen('3000', ()=>{
    console.log('app started');
})