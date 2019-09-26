import { Emails } from "../../../../db";
import clientsItems from "../../../Enums/clients.items";
import updateItemHelper from "../../../Helpers/Items/update.item.helper";

/**
 *
 * @param {*} emails: Emails to create -> must be array
 */
const updateEmailService = async emails => {
  emails = JSON.parse(JSON.stringify(emails));
  try {
    return await updateItemHelper(emails, clientsItems.EMAIL, Emails);
  } catch(err) {
    console.error(err);
    return err;
  }
};

export default updateEmailService;