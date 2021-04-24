// const { ObjectId } = require('mongodb');
const { ObjectId } = require('bson');
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

const findById = async (id) => conn()
  .then((db) => db.collection(collectionName).findOne({ _id: ObjectId(id) }));

const update = async (id, name, ingredients, preparation) => conn()
  .then((db) => db.collection(collectionName).updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        name,
        ingredients,
        preparation,
      },
    },
  ));

const remove = async (id) => conn()
  .then((db) => db.collection(collectionName).deleteOne({ _id: ObjectId(id) }));

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
