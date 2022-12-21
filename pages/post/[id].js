import React from "react";
import { Item, Container, Comment, Header } from "semantic-ui-react";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Post({ post, user, comments }) {
  return (
    <div className={poppins.className}>
      <main>
        <Container>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header as="h1">{post.title}</Item.Header>
                <Item.Meta>{post.body}</Item.Meta>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Header as="h6">Created by</Item.Header>
                <Item.Meta>
                  {user.firstName} {user.lastName} (@{user.username})
                </Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
          <Comment.Group>
            <Header as="h3">Comments</Header>
            {comments.comments.map((comment) => (
              <Comment.Content key={comment.id}>
                <Comment.Author as="h5">{comment.user.username}</Comment.Author>
                <Comment.Text>{comment.body}</Comment.Text>
              </Comment.Content>
            ))}
          </Comment.Group>
        </Container>
      </main>
    </div>
  );
}
// This gets called on every request
export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const userRes = await fetch(`https://dummyjson.com/users/${id}`);
  const comRes = await fetch(`https://dummyjson.com/posts/${id}/comments`);
  const post = await res.json();
  const user = await userRes.json();
  const comments = await comRes.json();
  // Pass data to the page via props
  return { props: { post, user, comments } };
}
