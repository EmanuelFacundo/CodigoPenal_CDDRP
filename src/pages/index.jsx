import Head from "next/head";
import CheckBox from "../components/CheckBox";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calculadora Penal | CDD RP</title>
      </Head>
      <h1>Corpo</h1>
      <CheckBox/>
    </div>
  )
}
