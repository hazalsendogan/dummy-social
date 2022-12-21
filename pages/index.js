import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import { Card, Container, Item, Comment, Header } from "semantic-ui-react";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home({ posts }) {
  return (
    <div className={poppins.className}>
      <main>
        <Container>
          <Item.Group divided>
            {posts.posts.map((post) => (
              <Item key={post.id}>
                <Link href={`/post/${post.id}`}>
                  <Item.Content>
                    <Item.Header as="h5">{post.title}</Item.Header>
                    <Item.Meta as="p">{post.body}</Item.Meta>
                  </Item.Content>
                </Link>
              </Item>
            ))}
          </Item.Group>
        </Container>
      </main>
    </div>
  );
}
// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();
  // Pass data to the page via props
  return { props: { posts } };
}
