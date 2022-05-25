import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { Global } from "@mantine/core";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={(theme) => ({
          ".mantine-hgwlez": {
            padding: "0.2rem",
          },
        })}
      />
      <MantineProvider
        theme={{
          colorScheme: "dark",
          colors: {
            // override dark colors to change them for all components
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
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
      </MantineProvider>
    </>
  );
};

export default Layout;
