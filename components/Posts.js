import React, { useState, useEffect } from "react";
import { Card, Container, Item,Grid } from "semantic-ui-react";

export default function Posts() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts");
        const data = await res.json();
        console.log(data);
        setposts(data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [posts]);
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          {posts.map((post) => (
            <Grid.Column key={post.id}>
                <Item.Group>
                    <Item>
                        <Item.Header as="h5">{post.title}</Item.Header>
                        <Item.Meta as="p">{post.body}</Item.Meta>
                    </Item>
                </Item.Group>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

