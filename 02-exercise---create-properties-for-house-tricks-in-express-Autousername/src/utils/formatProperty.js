const formatProperty = ({ _id: id, ...property }) => ({ id, ...property });

module.exports = formatProperty;
