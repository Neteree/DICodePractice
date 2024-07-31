const formatProperty = ({ _id: id, ...property }) => ({ id, ...property });

// _id -> id

module.exports = formatProperty;
