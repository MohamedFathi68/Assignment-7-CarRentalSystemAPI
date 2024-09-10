import { car, rental } from '../../database/dbConnection.js';

export const cleanUpExpiredRentals = async () => {
  const now = new Date();
  await rental.deleteMany({ returnDate: { $lte: now } });
  const activeRentals = await rental.distinct('carId');
  await car.updateMany(
    { _id: { $nin: activeRentals } },
    { $set: { status: 'avilable' } }
  );
  
  
  console.log('Expired rentals cleaned up successfully');
};

