import validateEmailOrPhone from "../../Shared/validateEmailOrPhone";
import clientsItems from "../../Enums/clients.items";

/**
 *
 * @param {*} emails: The emails of the client -> must be array
 * @param {*} phones: The phones of the client -> must be array
 * Destructuring: https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
 * @param {*} newClient: is a new client?
 */
const createClientHelper = async ({ emails, phones }) => {
  const validateEmail = await validateEmailOrPhone(emails, clientsItems.EMAIL, true);
  if (validateEmail) {
    return validateEmail
  }

  const validatePhone = await validateEmailOrPhone(phones, clientsItems.PHONE, true);
  if (validatePhone) {
    return validatePhone
  }
};

export default createClientHelper;