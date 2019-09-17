import { Schema } from 'mongoose';

const ClientsSchema = new Schema({
  firstName: String,
  lastName: String,
  company: String,
  age: Number,
  birthdate: Date,
  status: { type: Number, default: 1 },
  emails: [{ type: Schema.Types.ObjectId, ref: 'emails'}],
  phones: [{ type: Schema.Types.ObjectId, ref: 'phones'}]
});

export default ClientsSchema;