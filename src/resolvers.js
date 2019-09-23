import { emailsServices } from './API/Services/Emails';
import { phonesServices } from './API/Services/Phones';
import { clientsServices } from './API/Services/Clients';

export const resolvers = {
  Query: {
    ...emailsServices.Query,
    ...phonesServices.Query,
    ...clientsServices.Query,
  },
  Mutation: {
    ...emailsServices.Mutation,
    ...phonesServices.Mutation,
    ...clientsServices.Mutation,
  }
};