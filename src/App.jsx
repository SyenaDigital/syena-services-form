import { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer'

function App() {

    let [step, setStep] = useState(0)
    let [formInfo, setFormInfo] = useState()


    return (
        <div className='page'>

            <div className='homeContainer'>



                {step === 0 &&
                    <>
                        <h1 className='mainTitle'>questionário de <span style={{ color: 'rgba(137, 137, 137, 1)' }}>pedido de proposta</span></h1>
                        <span className='text'>Ajuda-nos a perceber um pouco sobre o teu negócio para encontrarmos a melhor forma de te ajudar.</span>
                        {/* <span className='text'>este questionário é confidencial, e permite-nos ter acesso a informação fundamental antes de agendarmos uma reunião e de lhe apresentarmos a melhor proposta com base nas necessidades e objetivos do seu negócio.<span style={{ color: 'rgba(255, 255, 255, 1)' }}> pedimos-lhe, por favor, a maior honestidade quando o preencher.</span> ao submeter o questionário, dá-nos permissão para o contactarmos via whatsapp e/ou comunicarmos por email, assim como enviar promoções relacionadas. os seus dados estão protegidos.</span> */}
                        <button onClick={() => setStep(1)} className='mainButton'>começar</button>
                    </>
                }

                {step === 1 &&
                    <>
                        <span className='bigText'>este questionário é confidencial, e permite-nos ter acesso a informação fundamental antes de agendarmos uma reunião e de lhe apresentarmos a melhor proposta com base nas necessidades e objetivos do seu negócio.<span style={{ color: 'rgba(255, 255, 255, 1)' }}> pedimos-lhe, por favor, a maior honestidade quando o preencher.</span></span>
                        <span className='text'> ao submeter o questionário, dá-nos permissão para o contactarmos via whatsapp e/ou comunicarmos por email, assim como enviar promoções relacionadas. os seus dados estão protegidos.</span>
                        <button onClick={() => setStep(prev => prev + 1)} className='mainButton'>continuar</button>
                    </>
                }







            </div>
            <Footer />
        </div>
    )
}

export default App
