import { clientsServices } from './API/Services/Clients';

export const resolvers = {
  Query: {
    ...clientsServices.Query
  },
  Mutation: {
    ...clientsServices.Mutation
  }
};
