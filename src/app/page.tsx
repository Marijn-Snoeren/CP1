"use client";

import { ApolloWrapper } from "../apollo";
import Blok from "../posts/Blok";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Blok />
    </ApolloWrapper>
  );
};

export default HomePage;
