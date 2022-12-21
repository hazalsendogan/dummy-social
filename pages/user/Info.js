import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default function Info({ user }) {
  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Email</Header>
          </Grid.Column>
          <Grid.Column>{user.email}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Phone</Header>
          </Grid.Column>
          <Grid.Column>{user.phone}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Birth Date</Header>
          </Grid.Column>
          <Grid.Column>{user.birthDate}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Gender</Header>
          </Grid.Column>
          <Grid.Column>{user.gender}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Univercity</Header>
          </Grid.Column>
          <Grid.Column>{user.university}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Address</Header>
          </Grid.Column>
          <Grid.Column>{user.address.address} - {user.address.state}, {user.address.city} - {user.address.postalCode}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Job</Header>
          </Grid.Column>
          <Grid.Column>{user.company.title}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Company Name / Department</Header>
          </Grid.Column>
          <Grid.Column>{user.company.name} / {user.company.department}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
