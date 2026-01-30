import { useEffect, useState } from "react"
import SingleChoice from "../form-modules/singelChoice/singleChoice"
import MultipleChoice from "../form-modules/multipleChoice/multipleChoice"
import { icons } from "../../assets/icons"

export default function Step4({ setStep, formInfo, setFormInfo }) {

    let [allFilled, setAllFilled] = useState(false)

    const faturacaoOpts = [
        'menos de 25.000€ anuais',
        '25.000€ - 50.000€ anuais',
        '50.000 - 100.000€ anuais',
        '100.000€ - 250.000€ anuais',
        '250.000€ - 500.000€ anuais',
        '500.000€ - 1.000.000€ anuais',
        'mais de 1.000.000€ anuais',
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

    function goPrevBack() {
        // setFormInfo(prev => ({
        //     ...prev,
        //     faturacao: null,
        //     tiposDeMarketingAtual: null,
        // }))
        setStep(prev => prev - 1)
    }


    return (
        <>
            <SingleChoice fieldName={'faturacao'} opts={faturacaoOpts} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'qual o volume de faturação anual do teu negócio? esta informação é essencial para termos um melhor enquadramento da fase do mesmo.'} />
            <MultipleChoice opts={marketingOpts} fieldName={'tiposDeMarketingAtual'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'quais os tipos de marketing que usas atualmente?'} />
            <div className="navButtonWrapper">
                <button onClick={() => goPrevBack()} className='backButton'>{icons.backArrowIcon()}</button>
                <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
            </div>
        </>
    )
}