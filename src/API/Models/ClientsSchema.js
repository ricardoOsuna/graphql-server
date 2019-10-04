import { Schema } from 'mongoose';

const ClientsSchema = new Schema({
  firstName: {
    type: String,
    minlength: 5,
    maxlength: 50
  },
  lastName: {
    type: String,
    minlength: 5,
    maxlength: 50
  },
  company: {
    type: String,
    minlength: 5,
    maxlength: 80
  },
  age: {
    type: Number,
    min: [18, 'You old must to be is 18 years']
  },
  birthdate: {
    type: Date,
  },
  status: {
    type: Number,
    min: 0,
    max: 1,
    default: 1,
  },
  emails: [{
    type: Schema.Types.ObjectId,
    ref: 'emails'
  }],
  phones: [{
    type: Schema.Types.ObjectId,
    ref: 'phones'
  }]
},{
  timestamps: { createdAt: true, updatedAt: true },
});

export default ClientsSchema;