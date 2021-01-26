import Head from "next/head";
import Footer from "./footer";
import Nav from "./nav";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-16 min-h-screen flex flex-col font-sans">
      <Head>
        <title>VARJA PHOTO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="flex flex-grow text-center content-center py-2 px-4 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
