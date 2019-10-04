import { Clients } from '../../../../db'

/**
 *
 * @param {*} limit: The number of client to obtain -> is not required
 * @param {*} offset: The number to skip -> is not required
 * @param {*} filters: Many filters to add to query
 */
const findClientService = async (limit, offset, filters) => {
  try {
    return await Clients.find({ deletedAt: undefined })
      .limit(limit)
      .skip(offset)
      .sort({status: 'desc', createdAt: 'asc'});

  } catch(err) {
    console.error(err);
    return err;
  }
};

export default findClientService;