export function inputs(crimesList) {
  return crimesList.map((List, index) => {
    return (
      <div key={index}>
        <input id={List.crime} type="checkbox" name={List.crime} />
        <label for={List.crime}>
          <h4>{List.crime}</h4>
          {List.desc !== "" ?
            <h5>| obs: {List.desc}</h5> : ""}
        </label>

      </div>
    )
  })
}

