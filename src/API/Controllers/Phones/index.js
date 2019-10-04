import createPhoneService from './Services/create.phone.service';
import updatePhoneService from './Services/update.phone.service';
import findPhonesByClientService from './Services/find.phone.by.client.service';

const ControllerPhones = {
  Query: {
    getPhonesByClient: async (root, { clientId }) => await findPhonesByClientService(clientId),
  },
  Mutation: {
    createPhone: async (root, { clientId, input  }) => await createPhoneService(input, clientId),
    updatePhone: async (root, { input }) => await updatePhoneService(input),
  },
};

export default ControllerPhones;
