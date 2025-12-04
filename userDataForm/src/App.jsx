import { useState } from 'react';
import './App.css'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Summary from './components/Summary';

function App() {

  // Kontrola widoku
  const [step, setStep] = useState(1);

  // Obiekt stanu z trzema polami    
  const [formData, setFormData] = useState({
      imie: "",
      nazwisko: "",
      email: "",
      miasto: "",
      ulica: ""
  });

  return (
    <>
      <div>
        <div className='progress'>
          <div className={`circle ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`circle ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`circle ${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        {step === 1 && (
          <Form1 formData={formData} setFormData={setFormData} setStep={setStep}/>
        )}
        {step === 2 && (
          <Form2 formData={formData} setFormData={setFormData} setStep={setStep}/>
        )}
        {step === 3 && <Summary formData={formData} setStep={setStep}/>}
      </div>
    </>
  )
}

export default App
