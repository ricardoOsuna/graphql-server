import mongoose, { connect, model } from 'mongoose';

// Models
import ClientsSchema from './API/Models/ClientsSchema';
import EmailsSchema from './API/Models/EmailsSchema';
import PhonesSchema from './API/Models/PhonesSchema';
import { afterFindClient, afterFindOneClient } from './API/Middlewares/clients.middleware';

//* Mongo env
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

/**
 ** Add plugin to execute softdeleted method
 * https://github.com/dsanel/mongoose-delete
 */
const mongoose_delete = require('mongoose-delete');
ClientsSchema.plugin(mongoose_delete, { deletedAt: true, indexFields: ['deletedAt'] });
EmailsSchema.plugin(mongoose_delete, { deletedAt: true, indexFields: ['deletedAt'] });
PhonesSchema.plugin(mongoose_delete, { deletedAt: true, indexFields: ['deletedAt'] });

//* Add middleware to schemas
// afterFindClient(ClientsSchema);
// afterFindOneClient(ClientsSchema);

//* Define models
export const Clients = model('clients', ClientsSchema);
export const Emails = model('emails', EmailsSchema);
export const Phones = model('phones', PhonesSchema);