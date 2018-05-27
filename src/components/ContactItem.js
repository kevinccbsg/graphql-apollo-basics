import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ContactItem = () => (
  <Card>
    <Card.Content>
      <Image floated="right" size="mini" src="/images/no-image.png" />
      <Card.Header>
        Steve Sanders
      </Card.Header>
      <Card.Meta>
        Friends of Elliot
      </Card.Meta>
      <Card.Description>
        Steve wants to add you to the group <strong>best friends</strong>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default ContactItem;
