import express from 'express';
import petController from '../controllers/pet.js';
import { verifyToken } from '../helpers/authentication.js';

const route = express.Router();

route.post('/', petController.create);
route.put('/:id', verifyToken, petController.update);
route.delete('/:id', verifyToken, petController.delete);
route.get('/', petController.getAll);
route.get('/:id', petController.getOne);

export default route;