const Form = ({ submit, change }) =>{
    return (
        <>
    <form onSubmit={submit}>
      
      <input 
      type="text" 
      onChange={change} 
      className="input" 
      />
      
      <button className="button">click</button>
    </form>

        </>
    )
}

export default Form