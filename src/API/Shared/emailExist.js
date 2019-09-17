import { Emails } from "../../db";

/**
 * @param {*} emails must to be array
 */

const emailExist = async emails => {
  return await Emails.find({
    email: emails.map(x => x.email),
    status: 1
  });
};

export default emailExist;