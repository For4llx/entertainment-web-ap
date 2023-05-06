import Head from "next/head";
import { GlobalStyles } from "@/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/Theme";
import BrowseLayout from "@/layouts/Browse";
import Browse from "@/features/Browse";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowseLayout>
          <Browse />
        </BrowseLayout>
      </ThemeProvider>
    </>
  );
}
