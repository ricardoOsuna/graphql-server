import { Phones } from "../../../../db";

/**
 *
 * @param {*} client: The id of specific client
 * @param {*} limit: The number of phones to find
 */
const findPhonesByClientService = (client, limit) => {
  return Phones.find({ client }).limit(limit);
};

export default findPhonesByClientService;