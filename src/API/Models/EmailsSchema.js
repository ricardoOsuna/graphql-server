import { Schema } from 'mongoose';

const EmailsSchema = new Schema({
  email: { type: String, unique: true },
  reference: String,
  default: { type: Boolean, default: false },
  status: { type: Number, default: 1 },
  client: { type: Schema.Types.ObjectId, ref: 'clients' }
});

export default EmailsSchema;