import { Emails } from "../../../../db";

/**
 *
 * @param {*} client: The id of specific client
 * @param {*} limit: The number of emails to find
 */
const findEmailsByClientService = (client) => {
  return Emails.find({ client });
};

export default findEmailsByClientService;