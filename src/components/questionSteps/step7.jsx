import { useEffect, useState } from "react"
import SingleChoice from "../form-modules/singelChoice/singleChoice"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"

export default function Step7({setStep, formInfo, setFormInfo}){

    let [allFilled, setAllFilled] = useState(false)


    useEffect(() => {
        if (
            formInfo?.comoChegou?.length > 0 &&
            formInfo?.quandoComecar?.length > 0 
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    return(
        <>
        <ShortTextModule fieldName={'comoChegou'} mandatory={true} setFormInfo={setFormInfo} title={'como chegou até nós?'}/>       
        <ShortTextModule fieldName={'quandoComecar'} mandatory={true} setFormInfo={setFormInfo} title={'quando deseja começar a trabalhar connosco?'}/>       
         <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
        </>
    )
}