//Importation dotenv
import 'dotenv/config';
//console.log(`TEST ${process.env.SRC}`); // remove this after you've confirmed it is working

// Importation mongosse
import mongoose from 'mongoose';
mongoose.connect("<connection string>")




// rendre accessible ma bibliothèque à l'intérieur de mon code
const http = require("http");

const ROUTES = require("./routes/product.routes")



