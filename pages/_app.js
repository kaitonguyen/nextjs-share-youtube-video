// import '../styles/globals.css'
import { useState } from "react";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const [email, setEmail] = useState("");

  return (
    <Layout setEmail={setEmail} email={email} >
      <Component {...pageProps} email={email} />
    </Layout>
  );
}

export default MyApp;
