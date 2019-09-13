import mongoose, { connect, model } from 'mongoose';

// Models
import ClientsSchema from './API/Models/ClientsSchema';
import EmailsSchema from './API/Models/EmailsSchema';
import PhonesSchema from './API/Models/PhonesSchema';

// Mongo env
require('dotenv').config();
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;

mongoose.Promise = global.Promise;
connect(`mongodb://${host}:${port}/${database}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

export const Clients = model('clients', ClientsSchema);
export const Emails = model('emails', EmailsSchema);
export const Phones = model('phones', PhonesSchema);