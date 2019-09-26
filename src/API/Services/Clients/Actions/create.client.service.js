import { Clients, Emails, Phones } from '../../../../db'
import createClientHelper from '../../../Helpers/Clients/create.client.helper';

/**
 *
 * @param {*} client: Is the params to create a client
 */

const createClientService = async client => {
  let _id;
  client = JSON.parse(JSON.stringify(client));
  try {
    const clientHasError = await createClientHelper(client);
    if (clientHasError) {
      return Error(clientHasError);
    }

    // Create new client
    const dataClient = new Clients(
      _.pick(client, [
        'firstName',
        'lastName',
        'age',
        'birthdate',
        'company'
      ])
    );
    const newClient = await dataClient.save();
    _id = newClient._id;

    // Add the reference of client to their email(s)
    let emails = client.emails.map(email => {
      return {
        ...email,
        client: _id
      }
    });

    // Add the reference of client to their phone(s)
    let phones = client.phones.map(phone => {
      return {
        ...phone,
        client: _id
      }
    });

    // Create the email(s) and phone(s) for the new client
    emails = await Emails.insertMany(emails);
    phones = await Phones.insertMany(phones);

    return {
      ...newClient._doc,
      emails,
      phones
    }
  } catch(err) {
    if (!_.isUndefined(_id)) {
      await Clients.deleteOne({ _id });
      await Emails.deleteMany({ client: _id });
      await Phones.deleteMany({ client: _id });
    }
    console.error(err);
    return err;
  }
};

export default createClientService;