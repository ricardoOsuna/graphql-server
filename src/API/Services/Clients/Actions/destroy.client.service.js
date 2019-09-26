import { Clients } from '../../../../db'
import mongooseArchive from 'mongoose-archive'

/**
 *
 * @param {*} _id: Specific _id of client to archive
 */

const destroyClientService = async _id => {
  Clients.plugin(mongooseArchive);
  const clientDeleted = await Clients.archive(_id);
  return clientDeleted;
};

export default destroyClientService;