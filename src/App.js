import React, { Component } from 'react';
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
        <ContactItem />
      </div>
    );
  }
}

export default App;
