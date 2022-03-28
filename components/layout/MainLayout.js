import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export function MainLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
