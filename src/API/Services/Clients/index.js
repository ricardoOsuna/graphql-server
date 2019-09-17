import findClientService from './Actions/find.client.service';
import findOneClientService from './Actions/findOne.client.service';
import createClientService from './Actions/create.client.service';
import updateClientService from './Actions/update.client.service';

export const clientsServices = {
  Query: {
    getClients: async (root, { limit }) => await findClientService(limit),
    getClient: async (root, { _id }) => await findOneClientService(_id),
  },
  Mutation: {
    createClient: async (root, { input }) => await createClientService(input),
    updateClient: async (root, { input }) => await updateClientService(input),
  }
};
