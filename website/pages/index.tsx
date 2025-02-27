import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import styles from "../styles/Home.module.css";
import BuyBtn from "../components/BuyBtn";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GoEarly</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.grid}>
          <Item />
          <div>
            <h1>BATTLE BUNDLE</h1>
            <h3>$20</h3>
            <p>Games focused on simulated combat between players.</p>
            <BuyBtn />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at EthDenver🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
