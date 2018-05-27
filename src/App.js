import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Header from './components/Header';
import ContactItem from './components/ContactItem';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Query
          query={gql`{
            contacts {
              id
              name
              phone
              address
            }
          }`}
          >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.contacts.map((obj, index) => (
              <div className="contact-container" key={`${index}-${obj.id}`}>
                <ContactItem item={obj} />
              </div>
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default App;
