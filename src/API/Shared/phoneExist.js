import { Phones } from "../../db";

/**
 *
 * @param {*} phones must to be array
 */

const phoneExist = async phones => {
  return await Phones.find({
    phone: phones.map(x => x.phone),
    status: 1
  });
};

export default phoneExist;