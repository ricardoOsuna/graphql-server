import validateEmailOrPhone from "../../Shared/validateEmailOrPhone";
import clientsItems from "../../Models/Enums/clients.items";

/**
 *
 * @param {*} emails: The emails of the client -> must be array
 * @param {*} phones: The phones of the client -> must be array
 * Destructuring: https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
 * @param {*} newClient: is a new client?
 */
const createClientHelper = async ({ emails, phones }) => {
  const emailHasError = await validateEmailOrPhone(emails, clientsItems.EMAIL, true);
  if (emailHasError) {
    return emailHasError
  }

  const phoneHasError = await validateEmailOrPhone(phones, clientsItems.PHONE, true);
  if (phoneHasError) {
    return phoneHasError
  }
};

export default createClientHelper;