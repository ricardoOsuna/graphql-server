import { Clients } from "../../db";

/**
 * @param {*} _id The id of the any client
 */

const clientExist = async _id => {
  return await Clients.findOne({_id});
};

export default clientExist;