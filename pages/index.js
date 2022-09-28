import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UserInputBox from "../components/UserInputBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>플랙티컬 랭킹시스템</title>
        <meta name="description" content="plactical ranking system" />
      </Head>
      <main>
        <div className={"w-screen h-screen flex justify-center bg-sky-200 rounded-lg"}>
            <UserInputBox/>
        </div>
      </main>
    </div>
  )
}
