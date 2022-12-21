import Link from "next/link";
import React from "react";
import { Grid, Card,Image } from "semantic-ui-react";
import styles from "../../styles/Users.module.css"

export default function Users({ data }) {
  return (
    <div>
      <main className={styles.main}>
        <Grid columns={3}>
          <Grid.Row>
            {data.users.map((user) => (
              <Grid.Column key={user.id}>
                <Card>
                    <Image src={user.image} alt={user.username}/>
                  <Card.Content>
                    <Card.Header>{user.firstName} {user.lastName}</Card.Header>
                    <Card.Meta>{user.username}</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Link href={`/user/${user.id}`}>User Detail</Link>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </main>
    </div>
  );
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
