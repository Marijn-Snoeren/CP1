"use client"; // Mark the file as a Client Component

import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../app/globals.css";

const BLOCK_A_QUERY = gql`
  query BlockAQuery($slug: String!) {
    postBy(slug: $slug) {
      content {
        heading
        body1
      }
    }
  }
`;

const BlockC: React.FC = () => {
  const postSlug = "blok-c";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { heading, body1 } = data.postBy.content;

  return (
    <div className="pt-16 pb-24 bg-darkgreen">
      <div className="text-center mb-12">
        <h1 className="font-heading text-heading text-lime">{heading}</h1>
        <p className="font-body text-body text-white">{body1}</p>
      </div>
    </div>
  );
};

export default BlockC;
