const filterProperties = (properties) =>
  properties.filter((property) => property.private === false);

module.exports = filterProperties;
