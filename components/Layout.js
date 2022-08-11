import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <div lang="en">
        <Head>
          <title>Vincent Cayadi</title>
          <meta
            name="name"
            content="web development, programming, student, athlete, swimmer, github, discord, developer, learner, engineer, mechanical engineer, mechanical engineering, electrical, electrical engineer, electrical engineering"
          ></meta>
        </Head>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
