import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="container select-none" lang="en">
      <Head>
        <title>Vincent Cayadi</title>
        <meta
          name="name"
          content="web development, programming, student, athelete, swimmer"
        ></meta>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
