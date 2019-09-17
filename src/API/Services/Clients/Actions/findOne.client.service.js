import { Clients } from '../../../../db'

const findOneClientService = async (_id) => {
  return await Clients.findOne({_id})
    .populate('emails');
};

export default findOneClientService;