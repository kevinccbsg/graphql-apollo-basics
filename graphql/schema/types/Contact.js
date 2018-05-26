
module.exports = `
  type Contact {
    id: ID!
    name: String
    lastName: String
    phone: String
    companyName: String
    address: String
    country: String
    city: String
  }

  input NewContact {
    name: String!
    lastName: String!
    phone: String!
  }
`;