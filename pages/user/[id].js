import React from "react";
import { Grid, Image, Item, Tab } from "semantic-ui-react";
import Info from "./Info";
import UserPost from "./UserPost";


export default function User({ user,userPosts }) {
    const panes = [
        {
            menuItem: 'Informations',
            render: () => <Tab.Pane attached={false}><Info user={user}/></Tab.Pane>,
          },
          {
            menuItem: 'Posts',
            render: () => <Tab.Pane attached={false}><UserPost userPosts={userPosts}/></Tab.Pane>,
          },
    ]
  return (
    <div>
      <main>
        <Item.Group>
          <Item>
            <Item.Image src={user.image}></Item.Image>
            <Item.Content>
              <Item.Header as="h4">
                {user.firstName} {user.lastName}
              </Item.Header>
              <Item.Meta>{user.username}</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const postRes = await fetch(`https://dummyjson.com/users/${id}/posts`);
  const user = await res.json();
  const userPosts = await postRes.json();
  // Pass data to the page via props
  return { props: { user,userPosts } };
}
