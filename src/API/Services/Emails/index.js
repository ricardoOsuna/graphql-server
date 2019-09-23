import findEmailsByClientService from './Actions/find.email.by.client.service';

export const emailsServices = {
  Query: {
    getEmailsByClient: async (root, { clientId }) => await findEmailsByClientService(clientId),
  },
  Mutation: {},
};
