import Head from "next/head";
import CheckBox from "../components/CheckBox";
import SumDisplay from "../components/SumDisplay";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calculadora Penal | CDD RP</title>
      </Head>
      <SumDisplay />
      <CheckBox />
    </div>
  )
}
