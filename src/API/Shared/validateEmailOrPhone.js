import emailExist from './emailExist';
import phoneExist from './phoneExist';
import clientsItems from '../Enums/clients.items';

/**
 *
 * @param {*} items: The emails/phones of the client
 * @param {*} type: The type of item
 * @param {*} newClient: is a new client?
 */

const validateEmailOrPhone = async (items, type, newClient = false) => {
  /**
   * The client have to has any email/phone by default
   * The client must´nt has more than one email/phone by default
   * The client must´nt repeat email/phone already in use
   */
  try {
    const { EMAIL, PHONE } = clientsItems;
    if (newClient) {
      if (!items.some(x => x.default)) {
        return `The client have to has any ${type} by default`;
      }
    }
    if (items.filter(x => x.default).length > 1) {
      return `The client must´nt has more than ${type} by default`;
    } else {
      switch (type) {
        case EMAIL:
          const emails = await emailExist(items);
          if (emails.length) {
            return `The client must´nt repeat ${type} already in use`;
          }
        break;

        case PHONE:
          const phones = await phoneExist(items);
          if (phones.length) {
            return `The client must´nt repeat ${type} already in use`;
          }
      }
    }
  } catch(err) {
    console.error(err);
    return err;
  }
};

export default validateEmailOrPhone;