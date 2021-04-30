export function inputs(crimesList) {
  return crimesList.map((List, index) => {
    return (
      <div  key={index}>
        <input type="checkbox" name={List.crime} />
        <h5>{List.crime}</h5>
        {List.desc !== "" ? 
          <p>{List.desc}</p> : ""}
      </div>
    )
  })
}

