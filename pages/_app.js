// import '../styles/globals.css'
import { useState } from "react";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const [email, setEmail] = useState("");
  const [videosList, setVideosList] = useState([]);
  const [voteState, setVoteState] = useState(null);

  return (
    <Layout setEmail={setEmail} email={email}>
      <Component
        {...pageProps}
        email={email}
        videosList={videosList}
        setVideosList={setVideosList}
        voteState={voteState}
        setVoteState={setVoteState}
      />
    </Layout>
  );
}

export default MyApp;
