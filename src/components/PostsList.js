import React from "react";

import { gql, useQuery } from "@apollo/client";

const GET_ALL_POSTS = gql`
query getAllPosts {
    posts {
      nodes {
        databaseId
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function PostsList() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading posts…</p>;
  if (error) return <p>Error :( </p>;

  const postsFound = Boolean(data?.posts.nodes.length);
  if (!postsFound) {
    return <p>No matching posts found.</p>;
  }

  return (
    <div className="posts-list">
      {data.posts.nodes.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
}
