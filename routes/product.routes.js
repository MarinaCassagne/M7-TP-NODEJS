// Création des routes pour notre API au format module NodeJS

const ROUTES = 
{
    createProduct: "/products", //Méthode POST
    getAllProducts: "/products", //Méthode GET
    getProductById: "/products/:id", //Méthode GET
    updateProduct: "/products/:id", //Méthode PUT
    deleteProduct: "/products/:id", //Méthode DELETE
};

// Création du module route NodeJS pour pouvoir utiliser la constante ROUTES ailleurs que dans ce fichier car utilisation de nodeJS
module.exports = ROUTES;