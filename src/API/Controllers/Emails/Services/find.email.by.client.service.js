import { Emails } from "../../../../db";

/**
 *
 * @param {*} client: The id of specific client
 */
const findEmailsByClientService = client => {
  return Emails.find({ client });
};

export default findEmailsByClientService;