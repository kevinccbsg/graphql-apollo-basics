const {
  contacts
} = require('../server-tests/fixtures/contact-fixture');

class Contact {
  constructor(options) {
    this.options = options;
  }

  connect() {
    if (this.options.development) {
      return Promise.resolve('Successfull connection');
    }
    // implement connection
  }

  getContacts() {
    if (this.options.development) {
      return Promise.resolve(contacts);
    }
    // Implement datadabse
  }

  createContact(contact) {
    if (this.options.development) {
      contacts.push(contact);
      return Promise.resolve(contact);
    }
  }

  dissConnect() {
    if (this.options.development) {
      return Promise.resolve('Successfully dissconected');
    }
    // Implement dissconnect
  }
}

module.exports = Contact;
