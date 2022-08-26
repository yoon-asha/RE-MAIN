import { Container, CssBaseline } from "@mui/material";
import styles from "../styles/Home.module.css";

import Head from "next/head";

import Nav from "../components/Nav";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      {/* <div className={styles.container}> */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* 내비게이션 */}
      <CssBaseline />
      <Nav />

      {/* 메인 */}
      <main className={styles.main}>
      <Main />
      </main>


      {/* 푸터 */}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          RE:MAIN 김영천 김용국 박상희 박이철 윤다미
        </a>
      </footer>
      {/* </div> */}
    </>
  );
}
