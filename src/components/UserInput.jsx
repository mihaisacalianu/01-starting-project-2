
export default function UserInput({handleChange, inputName,inputType,defaultValue}){
  return(
    <form id="user-input">
      <label htmlFor={inputName}>{inputName}</label>
      <input type={inputType} name={inputName} onChange={handleChange} defaultValue={defaultValue}/>
    </form>
  );
}
