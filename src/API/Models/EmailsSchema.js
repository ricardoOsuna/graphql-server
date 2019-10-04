import { Schema } from 'mongoose';
const EmailsSchema = new Schema({
  email: {
    type: String,
    minlength: 8,
    maxlength: 30,
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

export default EmailsSchema;