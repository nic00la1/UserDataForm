import React from 'react'

const Form1 = () => {
  return (
    <div>
       <form>
          <label>Imię: </label>
          <input type='text'/>
          <label>Nazwisko: </label>
          <input type='text'/>
          <label>E-Mail: </label>
          <input type='text'/>
          <button>Przejdź do kolejnego formularza</button>
        </form>
    </div>
  )
}

export default Form1
