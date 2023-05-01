import React from "react";

import ProgramsPage from "@/components/socialPrograms/ProgramsPage";

import { Props } from "../../interfaces";

const SocialPrograms = ({ data }: Props) => {
  return <ProgramsPage data={data} />;
};

export default SocialPrograms;

export async function getStaticProps() {
  const res = await fetch(
    "https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs"
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

