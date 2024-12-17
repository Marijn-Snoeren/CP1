"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";

const BLOCK_A_QUERY = gql`
  query BlockAQuery($slug: String!) {
    postBy(slug: $slug) {
      content {
        heading
        subtext1
        subtext2
        subtext3
        body1
        body2
        body3
        button
        image1 {
          node {
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
`;

const BlockN: React.FC = () => {
  const postSlug = "blok-n";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const { heading, subtext1, subtext2, subtext3, body1, body2, body3, button, image1 } = data.postBy.content;

  return (
    <div className="pt-20 pb-28 bg-darkgreen px-[20px] md:px-[120px]">
      <div className="flex flex-col mb-8">
        <h2 className="text-lime font-heading text-heading mb-2">{heading}</h2>
        <p className="text-white text-subtext font-subtext mb-6">{subtext1}</p>
      </div>
    </div>
  );
};

export default BlockN;
