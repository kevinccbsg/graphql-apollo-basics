const casual = require('casual');
const { addMockFunctionsToSchema, MockList } = require('graphql-tools');
const schema = require('./schema');

const mockFunction = function () {
  addMockFunctionsToSchema({
    schema,
    mocks: {
      Query: () => ({
        contacts: () => new MockList(10),
      }),
      // Mocks the `Int` scalar type to always return `12345`.
      Contact: () => ({
        name: casual.name,
        lastName: casual.last_name,
        phone: casual.phone,
        companyName: casual.company_name,
        address: casual.address,
        country: casual.country,
        city: casual.city,
      }),
    },
    preserveResolvers: false,
  });
};

module.exports = mockFunction;