import Meta from "meta/Meta";
import type { NextPage } from "next";
import Layout from "layout/Layout";

type HomeProps = {

};

const Home: NextPage<any> = () => {

  return (
    <>
      <Meta />
      <Layout isMainMenu={true} />
    </>
  );
};

export default Home;
