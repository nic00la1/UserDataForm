import { useState } from 'react';
import './App.css'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Summary from './components/Summary';

function App() {

  // Kontrola widoku
  const [step, setStep] = useState(1);

  // Obiekt stanu z trzema polami    
  const [formData, setformData] = useState({
      imie: "",
      nazwisko: "",
      email: "",
      miasto: "",
      ulica: ""
  });

  return (
    <>
      <div>
        {step === 1 && (
          <Form1 formData={formData} setformData={setformData} setStep={setStep}/>
        )}
        {step === 2 && (
          <Form2 formData={formData} setformData={setformData} setStep={setStep}/>
        )}
        {step === 3 && <Summary formData={formData} setStep={setStep}/>}
      </div>
    </>
  )
}

export default App
