import findPhonesByClientService from './Actions/find.phone.by.client.service';

export const phonesServices = {
  Query: {
    getPhonesByClient: async (root, { clientId }) => await findPhonesByClientService(clientId),
  },
  Mutation: {},
};
