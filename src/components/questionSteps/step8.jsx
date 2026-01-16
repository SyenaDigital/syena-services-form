import { useEffect, useState } from "react"
import SingleChoice from "../form-modules/singelChoice/singleChoice"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"

export default function Step8({setStep, formInfo, setFormInfo}){

    let [allFilled, setAllFilled] = useState(false)


    useEffect(() => {
        if (
            formInfo?.numeroWhatsapp?.length > 0 &&
            formInfo?.email?.length > 0 
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    return(
        <>
        <ShortTextModule fieldName={'numeroWhatsapp'} mandatory={true} setFormInfo={setFormInfo} title={'qual o seu número de WhatsApp?'}/>       
        <ShortTextModule fieldName={'email'} mandatory={true} setFormInfo={setFormInfo} title={'qual é email através do qual o podemos contactar? '}/>       
         <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>enviar</button>
        </>
    )
}