import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app=express()

//JSON
app.use(express.json())




const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>{
    console.log(`Server started successfully at http://localhost:${PORT}`)
})