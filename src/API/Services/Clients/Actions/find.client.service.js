import { Clients } from '../../../../db'

/**
 *
 * @param {*} limit: The number of client to obtain -> is not required
 */
const findClientService = async limit => {
  return await Clients.find({})
    .limit(limit);
};

export default findClientService;