export default function Result({values}){
  return(
    <table id="result">
     <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
    {values.map((val, valIndex)=>{
        return(<tr key={valIndex}>
          <td>{val.year}</td>
          <td>{val.valueEndOfYear}</td>
          <td>{val.interest}</td>
          <td>{val.accuInterest}</td>
          <td>{val.investment}</td>
        </tr>);
      })}
  </tbody>
    </table>
  );
}
