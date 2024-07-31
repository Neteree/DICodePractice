const formatReservation = ({ _id: id, ...reservation }) => ({
  id,
  ...reservation,
});
module.exports = formatReservation;
