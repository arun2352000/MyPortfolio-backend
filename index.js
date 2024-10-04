import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './Database/dbConfig.js';
import contactRoutes from './Routers/contact.route.js'

dotenv.config();


const port = process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/contact', contactRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })