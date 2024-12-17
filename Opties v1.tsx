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

const BlockG: React.FC = () => {
  const postSlug = "blok-g";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const {
    heading,
    subtext1,
    subtext2,
    subtext3,
    body1,
    body2,
    body3,
    button,
    image1,
  } = data.postBy.content;

  return (
    <div className="pt-16 pb-16 bg-lime px-4 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <h2 className="font-subtext text-subtext text-darkgreen leading-tight mb-2">
            {subtext1}
          </h2>
          <p className="font-body text-body text-darkgreen mb-4">{body1}</p>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-start text-left">
          <h2 className="font-subtext text-subtext text-darkgreen leading-tight mb-2">
            {subtext2}
          </h2>
          <p className="font-body text-body text-darkgreen mb-4">{body2}</p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start text-left">
          <h2 className="font-subtext text-subtext text-darkgreen leading-tight mb-2">
            {subtext3}
          </h2>
          <p className="font-body text-body text-darkgreen mb-4">{body3}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
          {button}
        </button>
      </div>
    </div>
  );
};

export default BlockG;
