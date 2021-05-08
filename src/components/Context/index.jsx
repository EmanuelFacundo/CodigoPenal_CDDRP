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
            {Crime.fianca === "X" ?
              <h5 style={{ color: '#111' }}> : SEM FIANÇA!</h5> : ""}
          </label>

        </div>
      )
    })
  }

  function sumCrimes(crime) {

    const penaCrime = parseInt(crime.pena)
    const multaCrime = parseInt(crime.multa)
    var fiancaCrime = 0
    if (crime.fianca !== "X") {
      fiancaCrime = parseInt(crime.fianca)
    }

    if (!crime.check) {
      crime.check = !crime.check

      if (pena !== "S/Pena") {
        setPena(pena + penaCrime)
      } else if (penaCrime !== 0) {
        setPena(penaCrime)
      }

      if (multa !== "S/Multa") {
        setMulta(multa + multaCrime)
      } else if (multaCrime !== 0) {
        setMulta(multaCrime)
      }

      if (fianca !== "S/Fiança") {
        setFianca(fianca + fiancaCrime)
      } else if (fiancaCrime !== 0) {
        setFianca(fiancaCrime)
      }

    } else {
      crime.check = !crime.check

      if (pena !== "S/Pena") {
        if ((pena - penaCrime) === 0) {
          setPena("S/Pena")
        } else {
          setPena(pena - penaCrime)
        }
      } else if (penaCrime !== 0) {
        setPena(penaCrime)
      }

      if (multa !== "S/Multa") {
        if ((multa - multaCrime) === 0) {
          setMulta("S/Multa")
        } else {
          setMulta(multa - multaCrime)
        }
      } else if (multaCrime !== 0) {
        setMulta(multaCrime)
      }

      if (fianca !== "S/Fiança") {
        if ((fianca - fiancaCrime) === 0) {
          setFianca("S/Fiança")
        } else {
          setFianca(fianca - fiancaCrime)
        }
      } else if (fiancaCrime !== 0) {
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