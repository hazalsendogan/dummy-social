import React from 'react'
import {Item, Comment, Header } from "semantic-ui-react";

export default function UserPost({userPosts}) {
  return (
    <Item.Group divided>
        {userPosts.posts.map( post => (
            <Item key={post.id}>
                <Item.Content>
                    <Item.Header>{post.title}</Item.Header>
                    <Item.Description>{post.body}</Item.Description>
                    <Item.Extra>
                        {
                            post.tags.map((tag,key) => (
                                <span key={key}>{tag}</span>
                            ))
                        }
                    </Item.Extra>
                </Item.Content>
            </Item>
        )

        )}
    </Item.Group>
  )
}
