/*
------------------------------------------
SCHÉMA
------------------------------------------

Exemple de schéma :

const blog = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  comments: [{
    user: String,
    content: String,
    votes: Number
  }]
}, {
  timestamps: true
});
*/
import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const PRODUCTSCHEMA = new Schema({
    
    name: {
        type: String,
        required: true,
    },
        
    description: {
        type: String,
        required: false,
    },

    price: {
        type: Number,
        required: true,
    },    
    
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },

    createdAt:  {
        type: Date,
        required: false,
        default: Date.now(),
    },
 
})

/*
------------------------------------------
MODÈLE
------------------------------------------

Exemple comment déclarer un modèle :
const Blog = mongoose.model('Blog', blog);

Les modèles utilisent votre schéma et l'appliquent à chaque document de leur collection. 
Ils sont responsables de toutes les interactions entre les documents, telles que les opérations de création, de lecture, de mise à jour et de suppression (CRUD).

*/

const PRODUCT = model("PRODUCT", PRODUCTSCHEMA);
export default PRODUCT; //vs module.exports = PRODUCT;

