export default function Form(){
  return(
    <form id="user-input">
      <label htmlFor="initial_investment">Initial Investment</label>
      <input type="text" name="initial_investment" />
      <label htmlFor="anual_investment">Anual Investment</label>
      <input type="text" name="anual_investment" />
      <label htmlFor="expected_return">Expected Return</label>
      <input type="text" name="expected_return" />
      <label htmlFor="inflation">Inflation</label>
      <input type="text" name="inflation" />
    </form>
  );
}
