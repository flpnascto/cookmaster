const Users = require('../models/usersModel');

const erroMessage = {
  invalid: 'Invalid entries. Try again.',
  registredEmail: 'Email already registered',
};

const isRequired = (value) => {
  if (value === undefined || value === null) return false;
  const minLength = 5;
  if (value.length < minLength) return false;
  return true;
};

const validateName = (name) => {
  const invalid = { code: 400, message: erroMessage.invalid };
  if (!isRequired(name)) throw invalid;
};

const validateEmail = (email) => {
  const invalid = { code: 400, message: erroMessage.invalid };
  if (!isRequired(email)) throw invalid;
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const verifyEmail = email.match(regexEmail);
  if (!verifyEmail) throw invalid;
};

const validatePassword = (password) => {
  const invalid = { code: 400, message: erroMessage.invalid };
  if (!isRequired(password)) throw invalid;
};

const existingEmail = async (email) => {
  const invalid = { code: 409, message: erroMessage.registredEmail };
  const isExisting = await Users.findByEmail(email);
  if (isExisting !== null) throw invalid;
};

const validateUser = async (name, email, password) => {
  try {
    validateName(name);
    validateEmail(email);
    validatePassword(password);
    await existingEmail(email);
  } catch (error) {
    return error;
  }
};

const create = async (name, email, password, role = 'user') => {
  const getError = await validateUser(name, email, password);
  if (getError !== undefined) return getError;
  const { insertedId } = await Users.create(name, email, password, role);
  const newUser = {
    name,
    email,
    role,
    _id: insertedId,
  };

  return { code: 201, newUser };
};

module.exports = {
  create,
};