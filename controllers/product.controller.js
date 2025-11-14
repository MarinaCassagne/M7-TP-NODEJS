// Chargement du package express
const express =  require ("express");

// Création d'une instance d'application Express
const app = new express();

// Rendre accessible ma bibliothèque routes à l'intérieur de mon code
const ROUTES = require("./routes/product.routes");

// Importer le modèle PRODUCT
    import PRODUCT from './models/product';
    // https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose-get-started/


// 1.createProduct(req, res)
app.post(ROUTES.createProduct, (req, res) => {
    try {
        // Création d'un produit à partir des données du body
            
        // Récupérer les données du body
            const PRODUCT = new PRODUCT(req.body) // créé une instance style new PRODUCT(req.body)

            //Sauvegarder les données du body pour créer un produit
            const ARTICLE = PRODUCT.create()

            res.status(201).send(`${req.url} : le produit a été créé.`);

    } catch (error) {
    res.status(400).send(`${req.url}La requête n’a pas pu être comprise par le serveur en raison d’une syntaxe incorrecte. Le client ne doit pas répéter la requête sans modification.`);
    }  
} )

// 2.

app.listen(3000);
