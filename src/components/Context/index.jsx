import { createContext, useContext } from "react";

const SumContext = createContext()

export function SumContextProvider(props) {
  function inputs(crimesList) {
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
    <SumContext.Provider value={{inputs}}>
      {props.children}
    </SumContext.Provider>
  )

}

export function useSumContext(){
  return useContext(SumContext)
}