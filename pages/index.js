import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UserInputBox from "../components/UserInputBox";

export default function Home() {
  return (
    <div>
      <main>
        <div className={"w-screen h-screen flex justify-center bg-sky-200 rounded-lg"}>
            <UserInputBox/>
        </div>
      </main>
    </div>
  )
}
