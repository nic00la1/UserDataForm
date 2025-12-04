import React from 'react';
import '../styles/Summary.css';

const Summary = ({ formData, setStep}) => {
  return (
    <div className='container'>
      <h className="title">Podsumowanie</h>
      <p><strong>Imię: </strong>{formData.imie}</p>
      <p><strong>Nazwisko: </strong>{formData.nazwisko}</p>
      <p><strong>E-mail: </strong>{formData.email}</p>
      <p><strong>Miasto: </strong>{formData.miasto}</p>
      <p><strong>Ulica: </strong>{formData.ulica}</p>

      <div className='center'>
        <button onClick={() => setStep(2)}>Powrót</button>
        <button onClick={() => alert("Formularz wysłany pomyślnie!")}>Zakończ</button>
      </div>
    </div>
  )
}

export default Summary
