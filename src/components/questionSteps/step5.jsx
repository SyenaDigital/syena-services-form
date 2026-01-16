import { useEffect, useState } from "react"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"

export default function Step5({setStep, formInfo, setFormInfo}){

    let [allFilled, setAllFilled] = useState(false)


    useEffect(() => {
        if (
            formInfo?.objetivo?.length > 0 &&
            formInfo?.quantidadeClientesQuerAtrair?.length > 0 &&
            formInfo?.obstaculo?.length > 0
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    return(
        <>
        <ShortTextModule fieldName={'objetivo'} mandatory={true} setFormInfo={setFormInfo} title={'qual o seu maior objetivo neste momento?'}/>
        <ShortTextModule fieldName={'obstaculo'} mandatory={true} setFormInfo={setFormInfo} title={'qual é o maior obstáculo que o(a) está a impedir de alcançar esse objetivo?'}/>
         <ShortTextModule fieldName={'quantidadeClientesQuerAtrair'} mandatory={true} setFormInfo={setFormInfo} title={'quantos clientes deseja atrair mensalmente para o seu negócio?'}/>
         <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
        </>
    )
}