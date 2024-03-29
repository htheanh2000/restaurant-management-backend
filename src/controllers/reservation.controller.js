const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { reservationService, emailService } = require('../services');

const makeReservation = catchAsync(async (req, res) => {
  const reservation = await reservationService.makeReservation(req.body);
  emailService.sendReservationEmail(req.body);
  res.status(httpStatus.CREATED).send(reservation);
});

module.exports = {
  makeReservation,
};
