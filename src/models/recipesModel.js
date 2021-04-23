// const { ObjectId } = require('mongodb');
const conn = require('../database');

/* {
 "name" : "Receita do Jacquin",
 "ingredients" : "Frango",
 "preparation" : "10 minutos no forno"
} */

/* {
"_id" : ObjectId("5f46919477df66035f61a356"),
"name" : "string",
"ingredients" : "string",
"preparation" : "string",
"userId" : ObjectId("5f46914677df66035f61a355")
} */

const collectionName = 'recipes';

const create = async (name, ingredients, preparation, userId) => conn()
  .then((db) => db.collection(collectionName).insertOne({
    name,
    ingredients,
    preparation,
    userId,
  }));

const findAll = async () => conn()
  .then((db) => db.collection(collectionName).find().toArray());

module.exports = {
  create,
  findAll,
};
