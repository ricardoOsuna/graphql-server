import getClient from "../../Shared/getClient";

/**
 *
 * @param {*} items: The items/phone to update
 * @param {*} type: The type of item
 * @param {*} modelReference: The model of item
 */

const updateItemHelper = async (item, type, modelReference) => {
  // Check if item exist
  const { _id } = item;
  const itemExist = await modelReference.findById(_id);
  if (!itemExist) {
    return Error(`The ${type} doesn´t exist`)
  }

  /**
   * Client must be exist
   * Client must be enabled
   */
  const { client } = itemExist;
  const clientExist = await getClient(client);
  if (!clientExist) {
    return Error('The user doesn´t exist');
  }

  // Get data of item
  const itemData = _.pick(item, [
    'reference',
    'default'
  ]);

  if (!Object.keys(itemData).length) {
    return Error(`Add any charecter´s ${type} to modified`)
  }

  // Check if the new item it´s default to set in false all of them
  if (item.default) {
    await modelReference.updateMany({ client }, { default: 0 });
  }

  await modelReference.updateOne({ _id }, itemData);
  return await modelReference.findById(_id);
};

export default updateItemHelper;