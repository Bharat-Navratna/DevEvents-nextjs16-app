import mongoose, { Schema, Document, Model, Types } from 'mongoose';

// TypeScript interface for Booking document
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Booking schema definition
const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => {
          // Email validation regex
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(v);
        },
        message: 'Please provide a valid email address',
      },
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

// Pre-save hook: Validate that referenced event exists
BookingSchema.pre('save', async function (next) {
  const booking = this as IBooking;

  // Only validate eventId if it's new or modified
  if (booking.isModified('eventId')) {
    try {
      // Check if Event model exists to avoid circular dependency issues
      const Event = mongoose.models.Event;
      
      if (!Event) {
        return next(new Error('Event model is not registered'));
      }

      // Verify the event exists
      const eventExists = await Event.exists({ _id: booking.eventId });

      if (!eventExists) {
        return next(
          new Error(
            `Event with ID ${booking.eventId} does not exist. Please provide a valid event ID.`
          )
        );
      }
    } catch (error) {
      return next(
        error instanceof Error
          ? error
          : new Error('Failed to validate event reference')
      );
    }
  }

  next();
});

// Add index on eventId for faster queries
BookingSchema.index({ eventId: 1 });

// Compound index for eventId and email to prevent duplicate bookings
BookingSchema.index({ eventId: 1, email: 1 });

// Export Booking model
const Booking: Model<IBooking> =
  mongoose.models.Booking ||
  mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
