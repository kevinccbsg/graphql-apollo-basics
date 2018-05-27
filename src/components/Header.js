import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const HeaderApp = () => (
  <div className="header-container">
    <Header as="h2" icon textAlign="center">
      <Icon name="users" circular />
      <Header.Content>
        Friends
      </Header.Content>
    </Header>
  </div>
)

export default HeaderApp;
