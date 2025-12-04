import React from 'react'

const Form1 = ({ formData, setFormData, setStep }) => {

  return (
    <div>
        <h1>Formularz 1</h1>
       <form>
          <label>Imię: </label>
          <input type='text'
                 placeholder='Imię'
                 value={formData.imie}
                 onChange={(e) => setFormData({...formData, imie: e.target.value})}/>
          <label>Nazwisko: </label>
          <input type='text'
                 placeholder='Nazwisko'
                 value={formData.nazwisko}
                 onChange={(e) => setFormData({...formData, nazwisko: e.target.value})}/>
          <label>E-Mail: </label>
          <input type='text'
                 placeholder='E-Mail'
                 value={formData.email}
                 onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          <div className='center'>
            <button onClick={() => setStep(2)}>Dalej</button>
          </div>
        </form>
    </div>
  )
}

export default Form1
