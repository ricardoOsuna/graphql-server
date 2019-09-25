import { Clients } from '../../../../db'

/**
 *
 * @param {*} _id: Specific _id of client to find
 */

const findOneClientService = async _id => {
  return await Clients.findOne({_id});
};

export default findOneClientService;