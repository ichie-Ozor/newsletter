// this is for routing, it is then sent to the server.

import express from 'express';
import { createAccount } from '../controller/accountController.js';
// import { createAccount } from './'
export const accountRoute = express.Router()

accountRoute.post('/', createAccount)