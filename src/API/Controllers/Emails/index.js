import createEmailService from './Services/create.email.service';
import updateEmailService from './Services/update.email.service';
import findEmailsByClientService from './Services/find.email.by.client.service';

const ControllerEmails = {
  Query: {
    getEmailsByClient: async (root, { clientId }) => await findEmailsByClientService(clientId),
  },
  Mutation: {
    createEmail: async (root, { clientId, input }) => await createEmailService(input, clientId),
    updateEmail: async (root, { input }) => await updateEmailService(input),
  }
};

export default ControllerEmails;
