import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { Global } from "@mantine/core";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={(theme) => ({
          "*": {
            padding: "0",
            margin: "0",
            "box-sizing": "border-box",
            "text-decoration": "none",
          },
          html: {
            "scroll-behavior": "smooth",
          },
          ".mantine-Accordion-label": {
            margin: "0.2rem",
          },
        })}
      />
      <MantineProvider
        theme={{ colorScheme: "dark" }}
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
