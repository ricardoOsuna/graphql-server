import { Clients } from '../../../../db'

const countClientsService = async () => {
  try {
    return await Clients.countDocuments();
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default countClientsService;