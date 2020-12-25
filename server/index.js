import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = require('express');

app.request(bodyParser.json({ limit: "30mb", extended: true}));
app.request(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.request(cors());

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.uiefd.mongodb.net/<dbname>?retryWrites=true&w=majority'

urok do 12:58
https://www.youtube.com/watch?v=ngc9gnGgUdA&t=536s