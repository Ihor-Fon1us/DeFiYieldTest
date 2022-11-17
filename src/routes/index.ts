import express, { Router } from 'express';
import { getBalance } from '../controllers/balanceController';


const router: Router = express.Router();

router.get('/getBalance', getBalance);


module.exports = router;