import { Clients } from '../../../../db'

/**
 *
 * @param {*} _id: Specific _id of client to find
 */

const findOneClientService = async _id => {
  try {
    return await Clients.findById(_id);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default findOneClientService;