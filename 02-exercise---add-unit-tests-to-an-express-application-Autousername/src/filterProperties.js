const filterProperties = (properties) => {
  return properties.filter((property) => !property.private);
};

module.exports = filterProperties;
