import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <div lang="en">
        <Head>
          <title>Vincent Cayadi</title>
          <meta
            name="name"
            content="vincent,vincentcayadi,cayadi,cayadivincent,web development, programming, student, athlete, swimmer, github, discord, developer, learner, engineer, mechanical engineer, mechanical engineering, electrical, electrical engineer, electrical engineering"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main className="subpixel-antialiased select-none font-manrope">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
