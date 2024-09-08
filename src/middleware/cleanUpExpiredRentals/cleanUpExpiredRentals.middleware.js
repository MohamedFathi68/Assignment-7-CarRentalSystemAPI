import { scheduleJob } from 'node-schedule'; // or any other scheduling library
import { car, rental } from '../../database/dbConnection.js';

export const cleanUpExpiredRentals = async () => {
  const now = new Date();
  await rental.deleteMany({ returnDate: { $lte: now } });
  const activeRentals = await rental.distinct('carId');
  await car.updateMany(
    { _id: { $nin: activeRentals } },
    { $set: { status: 'available' } }
  );
  
  console.log('Expired rentals cleaned up successfully');
};

scheduleJob('0 0 * * *', cleanUpExpiredRentals);
