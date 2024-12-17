"use client"; // Mark the file as a Client Component

import React, { useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import "../app/globals.css";

const BLOCK_A_QUERY = gql`
  query BlockAQuery($slug: String!) {
    postBy(slug: $slug) {
      content {
        heading
        body1
        body2
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

const BlockC: React.FC = () => {
  const postSlug = "blok-c";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { heading, body1, body2, image1 } = data.postBy.content;

  return (
    <div className="pt-16 pb-24 bg-darkgreen">
      <div className="text-center mb-12">
        <h1 className="font-heading text-heading text-lime">{heading}</h1>
        <p className="font-body text-body text-white">{body1}</p>
      </div>

      <div className="pt-4 grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="min-w-[250px] bg-white p-4 rounded-lg text-black">
            <p className="font-body text-body text-pink">06-12-2023</p>
            <p className="font-body text-body text-darkgreen mt-2 pr-6">{body2}</p>
            {image1?.node && (
              <img
                src={image1.node.sourceUrl}
                srcSet={image1.node.srcSet}
                width={48}
                height={48}
                alt="image"
                className="rounded-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockC;
