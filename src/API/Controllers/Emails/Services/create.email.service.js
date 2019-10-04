import { Emails } from "../../../../db";
import clientsItems from "../../../Models/Enums/clients.items";
import createItemHelper from "../../../Helpers/Items/create.item.helper";

/**
 *
 * @param {*} emails: Emails to create -> must be array
 * @param {*} clientId: _id of specific client
 */
const createEmailService = async (emails, clientId) => {
  emails = JSON.parse(JSON.stringify(emails));
  try {
    return await createItemHelper(emails, clientId, clientsItems.EMAIL, Emails);
  } catch(err) {
    console.error(err);
    return err;
  }
};

export default createEmailService;