import { Phones } from "../../../../db";
import clientsItems from "../../../Enums/clients.items";
import updateItemHelper from "../../../Helpers/Items/update.item.helper";

/**
 *
 * @param {*} phones: Phones to create -> must be array
 */
const updatePhoneService = async phones => {
  phones = JSON.parse(JSON.stringify(phones));
  try {
    return await updateItemHelper(phones, clientsItems.PHONE, Phones);
  } catch(err) {
    console.error(err);
    return err;
  }
};

export default updatePhoneService;