import { Clients } from '../../../../db';

/**
 *
 * @param {*} client: Is the params of client to update
 */

const updateClientService = async client => {
  client = JSON.parse(JSON.stringify(client));
  const { _id } = client;

  try {
    const dataClient = _.pick(client, [
      'firstName',
      'lastName',
      'age',
      'birthdate',
      'company',
      'status'
    ]);

    if (!Object.keys(dataClient).length) {
      return Error('Add any charecter´s client to modified')
    }

    const clientUpdated = await Clients.updateOne({ _id }, dataClient);
    if (!clientUpdated.ok) {
      return Error('The client doesn´t exist');
    }

    return Clients.findOne({ _id });
  } catch(err) {
    console.error(err);
    return err;
  }
};

export default updateClientService;