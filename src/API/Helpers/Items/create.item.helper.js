import getClient from "../../Shared/getClient";
import validateEmailOrPhone from "../../Shared/validateEmailOrPhone";

/**
 *
 * @param {*} items: The items/phone to create
 * @param {*} clientId: Id of specific client to insert those item
 * @param {*} type: The type of item
 * @param {*} modelReference: The model of item
 */

const createItemHelper = async (items, clientId, type, modelReference) => {
  /**
   * Client must be exist
   * Client must be enabled
   */
  const clientExist = await getClient(clientId);
  if (!clientExist) {
    return Error('The user doesn´t exist');
  } else if (clientExist.status) {
    return Error(`Cannot create ${type}s because the client it´s disabled`)
  }

  // Check if the items are valid
  const itemHasError = await validateEmailOrPhone(items, type);
  if (itemHasError) {
    return Error(itemHasError);
  }

  // Add the reference of the client
  items = items.map(x => {
    return {
      ..._.pick(x, [`${type}`, 'reference', 'default']),
      client: clientId
    }
  });

  // Check if some new item it´s default to set in false all of them
  if (items.some(x => x.default)) {
    await modelReference.updateMany({ client: clientId }, { default: 0 });
  }

  return await modelReference.insertMany(items);
};

export default createItemHelper;