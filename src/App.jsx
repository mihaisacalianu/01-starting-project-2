import { useState } from "react";
import Header from "./components/header"
import Result from "./components/Result";
import UserInput from "./components/UserInput"
import calculateInvestmentResults from './util/investment'

function App() {

  const [initialInvestment ,setInitialInvestment] = useState(0);
  const [annualInvestment ,setAnualInvestment] = useState(0);
  const [expectedReturn ,setExpectedReturn] = useState(0);
  const [duration ,setDuration] = useState(0);
  const [values, setValues] = useState(0);
  const [investedCapital ,setInvestedCapital] = useState(0);

  function updateInitialValue(event) {
    setInitialInvestment(()=>parseInt(event.target.value));
    updateTable()
  }

  function updateAnualValue(event) {
    setAnualInvestment(()=>parseInt(event.target.value));
    updateTable()
  }

  function updateReturnValue(event) {
    setExpectedReturn(()=>parseFloat(event.target.value));
    updateTable()
  }

  function updateDurationValue(event) {
    setDuration(()=>parseInt(event.target.value));
    updateTable()
  }

  function updateTable() {
    let valuesT = {
      initialInvestment: initialInvestment,
      annualInvestment: annualInvestment,
      expectedReturn: expectedReturn,
      duration: duration
    }
    setInvestedCapital(()=>initialInvestment + annualInvestment);
    setValues(()=>calculateInvestmentResults(valuesT));
  }

  return (
    <>
      <Header />
      <div className="input-group" >
        <UserInput handleChange={updateInitialValue} inputName="Initial Investment"  defaultValue={initialInvestment} inputType="text"/>
        <UserInput handleChange={updateAnualValue} inputName="Anual Investment" defaultValue={annualInvestment} inputType="text"/>
        <UserInput handleChange={updateReturnValue} inputName="Expected Return" defaultValue={expectedReturn} inputType="text"/>
        <UserInput handleChange={updateDurationValue} inputName="Duration" defaultValue={duration} inputType="number"/>
      </div>
      {values ? <Result values={values} initialInvestment={investedCapital}/> : null}
    </>
  );
}

export default App
