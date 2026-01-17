import { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer'
import HomeStep from './components/questionSteps/homeStep'
import AlertStep from './components/questionSteps/alertStep'
import Step2 from './components/questionSteps/step2'
import Step3 from './components/questionSteps/step3'
import Step4 from './components/questionSteps/step4'
import Step5 from './components/questionSteps/step5'
import Step6 from './components/questionSteps/step6'
import Step7 from './components/questionSteps/step7'
import Step8 from './components/questionSteps/step8'
import ThankyouStep from './components/questionSteps/thankyouStep'

function App() {

    let [step, setStep] = useState(0)
    let [formInfo, setFormInfo] = useState()



    return (
        <div className='page'>

            {step === 0 &&
                <div className='homeContainer'>
                    <HomeStep setStep={setStep} />
                </div>
            }

            {step === 1 &&
                <div className='homeContainer'>
                    <AlertStep setStep={setStep} />
                </div>
            }


            {step > 1 && step < 9 &&

                <div className='regularContainer'>

                    {step === 2 &&
                        <Step2 formInfo={formInfo} setStep={setStep} setFormInfo={setFormInfo} />
                    }


                    {step === 3 &&
                        <Step3 formInfo={formInfo} setStep={setStep} setFormInfo={setFormInfo} />
                    }


                    {step === 4 &&
                        <Step4 formInfo={formInfo} setStep={setStep} setFormInfo={setFormInfo} />
                    }

                    {step === 5 &&
                        <Step5 formInfo={formInfo} setStep={setStep} setFormInfo={setFormInfo} />
                    }

                    {step === 6 &&
                        <Step6 formInfo={formInfo} setStep={setStep} setFormInfo={setFormInfo} />
                    }

                    {step === 7 &&
                        <Step7 formInfo={formInfo} setStep={setStep} setFormInfo={setFormInfo} />
                    }

                    {step === 8 &&
                        <Step8 formInfo={formInfo} setStep={setStep} setFormInfo={setFormInfo} />
                    }

                </div>}



            {step === 9 &&
                <div className='homeContainer'>
                    <ThankyouStep />
                </div>
            }





            <Footer />
        </div>
    )
}

export default App


