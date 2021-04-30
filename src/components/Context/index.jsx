import { createContext, useContext, useState } from "react";

const SumContext = createContext()

export function SumContextProvider(props) {

  const { pena, setPena } = useState(0)
  const { multa, setMulta } = useState(0)
  const { fianca, setFianca } = useState(0)

  function checks(crimesList) {
    return crimesList.map((List, index) => {
      return (
        <div key={index}>
          <input id={List.crime} type="checkbox" name={List.crime} />
          <label htmlFor={List.crime}>
            <h4>{List.crime}</h4>
            {List.desc !== "" ?
              <h5>| obs: {List.desc}</h5> : ""}
          </label>

        </div>
      )
    })
  }

  return (
    <SumContext.Provider value={{ checks }}>
      {props.children}
    </SumContext.Provider>
  )

}

export function useSumContext() {
  return useContext(SumContext)
}