
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from 'router';

dotenv.config()
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env_MonGODB_URL)
.then(()=>console.log("Connected to MongoDB"))
.catch((error) => console.log(error));

app.use("/api/products", productRoutes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

