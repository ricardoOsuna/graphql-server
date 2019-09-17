import { Schema } from 'mongoose';

const PhonesSchema = new Schema({
  phone: { type: Number, unique: true },
  reference: String,
  default: { type: Boolean, default: false },
  status: { type: Number, default: 1 },
  client: { type: Schema.Types.ObjectId, ref: 'clients' }
});

export default PhonesSchema;