import ControllerClients from './API/Controllers/Clients';
import ControllerEmails from './API/Controllers/Emails';
import ControllerPhones from './API/Controllers/Phones';

export const resolvers = {
  Query: {
    ...ControllerClients.Query,
    ...ControllerEmails.Query,
    ...ControllerPhones.Query,
  },
  Mutation: {
    ...ControllerClients.Mutation,
    ...ControllerEmails.Mutation,
    ...ControllerPhones.Mutation,
  }
};