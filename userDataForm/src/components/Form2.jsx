import React from 'react'

const Form2 = ({ formData, setFormData, setStep }) => {
  return (
    <div>
      <h1>Formularz 2</h1>
      <form>
        <label>Miasto: </label>
        <input type='text'
               value={formData.miasto}
               onChange={(e) => 
                setFormData({ ...formData, miasto: e.target.value })
               }/>
        <label>Ulica: </label>
        <input type='text'
                value={formData.ulica}
                onChange={(e) => 
                    setFormData({...formData, ulica: e.target.value})
                }/>

            {/* Dane z poprzedniego formularza:  */}
            <h3>Dane z poprzedniego formularza</h3>
            <p>Imię: {formData.imie}</p>
            <p>Nazwisko: {formData.nazwisko}</p>
            <p>Email: {formData.email}</p>

        <div className='center'>
            <button onClick={() => setStep(1)}>POWRÓT</button>
            <button onClick={() => setStep(3)}>DALEJ</button>
        </div>
      </form>
    </div>
  )
}

export default Form2