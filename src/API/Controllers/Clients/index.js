import findClientService from './Services/find.client.service';
import createClientService from './Services/create.client.service';
import updateClientService from './Services/update.client.service';
import destroyClientService from './Services/destroy.client.service';
import findOneClientService from './Services/findOne.client.service';
import countClientsService from './Services/count.clients.service';

const ControllerClients = {
  Query: {
    getClients: async (root, { limit, offset, filters }) => await findClientService(limit, offset),
    getClient: async (root, { _id }) => await findOneClientService(_id),
    countClients: async root => await countClientsService(),
  },
  Mutation: {
    createClient: async (root, { input }) => await createClientService(input),
    updateClient: async (root, { input }) => await updateClientService(input),
    destroyClient: async (root, { _id }) => await destroyClientService(_id),
  }
};

export default ControllerClients;
