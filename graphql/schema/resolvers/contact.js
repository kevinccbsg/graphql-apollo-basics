const Contact = require('../../../bbdd/Contact');

const contacts = async (_, params, ctx) => {
  console.log(params);
  console.log('----');
  console.log(ctx);
  try {
    const contactDDBB = new Contact({ development: true });
    await contactDDBB.connect();
    const results = await contactDDBB.getContacts();
    return results;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  contacts,
};
