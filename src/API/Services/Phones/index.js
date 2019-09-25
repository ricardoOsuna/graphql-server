import createPhoneService from './Actions/create.phone.service';
import updatePhoneService from './Actions/update.phone.service';
import findPhonesByClientService from './Actions/find.phone.by.client.service';

export const phonesServices = {
  Query: {
    getPhonesByClient: async (root, { clientId }) => await findPhonesByClientService(clientId),
  },
  Mutation: {
    createPhone: async (root, { clientId, input  }) => await createPhoneService(input, clientId),
    updatePhone: async (root, { input }) => await updatePhoneService(input),
  },
};
