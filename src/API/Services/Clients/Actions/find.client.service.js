import { Clients } from '../../../../db'

const findClientService = async (limit) => {
  return await Clients.find({})
    .limit(limit);
};

export default findClientService;