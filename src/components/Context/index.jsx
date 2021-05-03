import { createContext, useContext, useState } from "react";

const SumContext = createContext()

export function SumContextProvider(props) {

  const [pena, setPena] = useState("S/Pena")
  const [multa, setMulta] = useState("S/Multa")
  const [fianca, setFianca] = useState("S/Fiança")

  function checks(crimesList) {
    return crimesList.map((Crime, index) => {
      return (
        <div key={index}>
          <input id={Crime.crime} type="checkbox" name={Crime.crime} onClick={() => sumCrimes(Crime)} />
          <label htmlFor={Crime.crime}>
            <h4>{Crime.crime}</h4>
            {Crime.desc !== "" ?
              <h5>| obs: {Crime.desc}</h5> : ""}
          </label>

        </div>
      )
    })
  }

  function sumCrimes(crime) {

    const penaCrime = parseInt(crime.pena)
    const multaCrime = parseInt(crime.multa)
    const fiancaCrime = parseInt(crime.fianca)

    if (!crime.check) {
      crime.check = !crime.check

      if (pena !== "S/Pena") {
        setPena(pena + penaCrime)
      } else {
        setPena(penaCrime)
      }

      if (multa !== "S/Multa") {
        setMulta(multa + multaCrime)
      } else {
        setMulta(multaCrime)
      }

      if (fianca !== "S/Fiança") {
        setFianca(fianca + fiancaCrime)
      } else {
        setFianca(fiancaCrime)
      }

    } else {
      crime.check = !crime.check

      if (pena !== "S/Pena") {
        setPena(pena - penaCrime)
        if (pena === 0) {
          setPena("S/Pena")
        }
      } else {
        setPena(penaCrime)
      }

      if (multa !== "S/Multa") {
        setMulta(multa - multaCrime)
        if (multa === 0) {
          setMulta("S/Multa")
        }
      } else {
        setMulta(multaCrime)
      }

      if (fianca !== "S/Fiança") {
        setFianca(fianca - fiancaCrime)
        if (fianca === 0) {
          setFianca("S/Fiança")
        }
      } else {
        setFianca(fiancaCrime)
      }
    }
  }

  return (
    <SumContext.Provider value={{ checks, pena, multa, fianca }}>
      {props.children}
    </SumContext.Provider>
  )

}

export function useSumContext() {
  return useContext(SumContext)
}