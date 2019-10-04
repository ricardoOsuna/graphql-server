import { Schema } from 'mongoose';

const PhonesSchema = new Schema({
  phone: {
    type: Number,
    // minlength: 10,
    maxlength: 10,
    unique: true
  },
  reference: {
    type: String,
    minlength: 3,
    maxlength: 25,
  },
  default: {
    type: Boolean,
    default: false
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'clients'
  }
},{
  timestamps: { createdAt: true, updatedAt: true },
});

export default PhonesSchema;