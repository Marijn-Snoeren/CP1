"use client";

import { ApolloWrapper } from "../apollo";
import Blok from "./blok";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Blok />
    </ApolloWrapper>
  );
};

export default HomePage;
