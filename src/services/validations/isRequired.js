const isRequired = (value) => {
  if (value === undefined || value === null || value === '') return true;
  return false;
};

module.exports = isRequired;