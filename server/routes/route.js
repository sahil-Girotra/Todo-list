import express, { Router } from 'express';


import { atd, gtd, toogd, utd, dtd } from '../controller/td-control.js';

const route = express.Router();


route.post('/todos', atd)
route.get('/todos', gtd);
route.get('/todos/:id', toogd);
route.put('/todos/:id', utd);
route.delete('/todos/:id', dtd);


export default route;