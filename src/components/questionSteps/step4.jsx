import { useEffect, useState } from "react"
import SingleChoice from "../form-modules/singelChoice/singleChoice"
import MultipleChoice from "../form-modules/multipleChoice/multipleChoice"

export default function Step4({setStep, formInfo, setFormInfo}){

    let [allFilled, setAllFilled] = useState(false)

    const faturacaoOpts = [
        'menos de 50.000€ anuais',
        '50.000 - 100.000€ anuais',
        '100.000 - 250.000€ anuais',
        '250.000 - 500.000€ anuais',
        '500.000€ - 1.000.000€ anuais',
        '1.000.000€ a 3.000.000€ anuais',
        '3.000.000€ a 5.000.000€ anuais',
        '+ 5.000.000 anuais',
    ]

    const marketingOpts = [
            'redes sociais',
            'anúncios no Facebook/Instagram',
            'Google Ads',
            'email marketing',
            'SEO',
            'televisão',
            'rádio',
            'outros meios de imprensa',
            'outdoor',
            'outro',
    ]
    

    useEffect(() => {
        if (
            formInfo?.faturacao?.length > 0 &&
            formInfo?.tiposDeMarketingAtual?.length > 0
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    return(
        <>
        <SingleChoice fieldName={'faturacao'} opts = {faturacaoOpts } mandatory={true} setFormInfo={setFormInfo} title={'qual o nível de volume de faturação anual em que se enquadra? precisamos desta informação para termos um melhor enquadramento, e a mesma será mantida confidencial, tal como todas as outras respostas.'}/>
        <MultipleChoice opts={marketingOpts}  fieldName={'tiposDeMarketingAtual'} mandatory={true} setFormInfo={setFormInfo} title={'quais os tipos de marketing que usa atualmente?'} />
         <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
        </>
    )
}