import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, withApollo, graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchAction } from './actions';
import Header from './components/Header';
import ContactItem from './components/ContactItem';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(input) {
    this.props.searchAction(input.target.value);
  }

  render() {
    const { searchText, data } = this.props;
    return (
      <div className="app-container">
        <Header />
        <input onChange={this.handleSearch} />

          {data.error && (
            <p>Error :(</p>
          )}
          {data.loading && (
            <p>Loading...</p>
          )}
          {!data.loading && (
            data.contacts
            .filter(obj => {
              if (!searchText) return true;
              if (searchText && searchText !== '') {
                if (obj.name.includes(searchText)) return true;
                if (!obj.name.includes(searchText)) return false;
              }
              return true;
            })
            .map((obj, index) => (
              <div className="contact-container" key={`${index}-${obj.id}`}>
                <ContactItem item={obj} />
              </div>
            ))
          )}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    searchText: state.searchValue,
  }
);
const mapDipatchToProps = dispatch => (
  bindActionCreators({
    searchAction,
  }, dispatch)
);

export default compose(
  withApollo,
  graphql(gql`{
    contacts {
      id
      name
      phone
      address
    }
  }`),
  connect(mapStateToProps, mapDipatchToProps),
)(App);
