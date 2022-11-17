import express, { Express, NextFunction, Request, Response, urlencoded } from 'express';

const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

export const app: Express = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

