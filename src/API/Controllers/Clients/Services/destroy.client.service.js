import { Clients, Emails, Phones } from '../../../../db'

/**
 *
 * @param {*} _id: Specific _id of client to archive
 */

const destroyClientService = async _id => {
  try {
    const client = await Clients.findById(_id);
    if (!client) {
      return Error('The client doesn´t exist');
    }

    return await Clients.deleteById({ _id });
  } catch(err) {
    console.error(err);
    return err;
  }
};

export default destroyClientService;