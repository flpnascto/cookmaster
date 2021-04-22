// const { ObjectId } = require('mongodb');
const conn = require('../database');

/* {
 "name" : "Erick Jacquin",
 "email" : "erickjacquin@gmail.com",
 "password" : "12345678",
 "role" : "user"
} */

/* {
"_id" : ObjectId("5f46914677df66035f61a355"),
"name" : "Erick Jacquin",
"email" : "erickjacquin@gmail.com",
"password" : "12345678",
"role" : "user"
} */

const collectionName = 'users';

const create = async (name, email, password, role) => conn()
  .then((db) => db.collection(collectionName).insertOne({
    name,
    email,
    password,
    role,
  }));

const findAll = async () => conn()
  .then((db) => db.collection(collectionName).find().toArray());

const findByEmail = async (email) => conn()
  .then((db) => db.collection(collectionName).findOne({ email }));

module.exports = {
  create,
  findAll,
  findByEmail,
};
