import createEmailService from './Actions/create.email.service';
import updateEmailService from './Actions/update.email.service';
import findEmailsByClientService from './Actions/find.email.by.client.service';

export const emailsServices = {
  Query: {
    getEmailsByClient: async (root, { clientId }) => await findEmailsByClientService(clientId),
  },
  Mutation: {
    createEmail: async (root, { clientId, input }) => await createEmailService(input, clientId),
    updateEmail: async (root, { input }) => await updateEmailService(input),
  }
};
