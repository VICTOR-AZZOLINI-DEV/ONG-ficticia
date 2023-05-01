import React from "react";

import SingleProgram from "@/components/singleProgram/SingleProgram";

import { Programs, Paths} from "@/interfaces";

const Program = ({data}: {data: Programs}) => {
  return <SingleProgram {...data} />;
};

export default Program;

export async function getStaticPaths() {
  const res = await fetch(
    "https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs"
  );
  const data = await res.json();

  const paths = data.map((program: Programs) => ({
    params: { id: program.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Paths) {
  const res = await fetch(
    `https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs/${params.id}`
  );
  const data = await res.json();

  console.log(data);

  return { props: { data } };
}
