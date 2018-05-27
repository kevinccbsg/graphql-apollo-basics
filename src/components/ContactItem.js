import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ContactItem = ({ item }) => (
  <Card>
    <Card.Content>
      <Image floated="right" size="mini" src="/images/no-image.png" />
      <Card.Header>
        {item.name}
      </Card.Header>
      <Card.Meta>
        {item.phone}
      </Card.Meta>
      <Card.Description>
        {item.address}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default ContactItem;
