import {Router} from 'express';
const templateRouter = Router();
import {template} from "./template.controller.js";
import test from '../../middleware/middlewareTemplate1/test.js';

// Define routes
templateRouter.get('/template', test , template);

export default templateRouter;