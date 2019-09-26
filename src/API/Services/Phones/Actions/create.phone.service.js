import { Phones } from "../../../../db";
import clientsItems from "../../../Enums/clients.items";

/**
 *
 * @param {*} phones: Phones to create -> must be array
 * @param {*} clientId: _id of specific client
 */
const createPhoneService = async (phones, clientId) => {
  phones = JSON.parse(JSON.stringify(phones));
  try {
    return await createItemHelper(phones, clientId, clientsItems.PHONE, Phones);
  } catch(err) {
    console.error(err);
    return err;
  }
};

export default createPhoneService;