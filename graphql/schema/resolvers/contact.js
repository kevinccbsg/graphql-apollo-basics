const Contact = require('../../../bbdd/Contact');

const contacts = async (_, params, ctx) => {
  try {
    const contactDDBB = new Contact({ development: true });
    await contactDDBB.connect();
    const results = await contactDDBB.getContacts();
    return results;
  } catch (err) {
    throw err;
  }
};

const createContact = async (_, { contact }, ctx) => {
  try {
    const contactDDBB = new Contact({ development: true });
    await contactDDBB.connect();
    const results = await contactDDBB.createContact(contact);
    return contact;
  } catch (err) {
    throw err;
  }
  return null;
};

module.exports = {
  contacts,
  createContact,
};
