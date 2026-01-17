import { useEffect, useState } from "react"
import SingleChoice from "../form-modules/singelChoice/singleChoice"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"

export default function Step6({ setStep, formInfo, setFormInfo }) {

    let [allFilled, setAllFilled] = useState(false)


    const valorMarketingOpts = [
        '0 - 500€',
        '500 - 1000€',
        '1000 - 1500€',
        '1500 - 2500€',
        '2500 - 5000€',
        '+5000€',
    ]


    const nifTypeOpts = [
        'tenho NIF de empresa',
        'estou no Regime de IVA',
        'nenhuma das anteriores',
    ]



    useEffect(() => {
        if (
            formInfo?.valorInvestimentoMarketing?.length > 0 &&
            formInfo?.servicoProcura?.length > 0 &&
            formInfo?.nif_type?.length > 0
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    return (
        <>
            <SingleChoice fieldName={'valorInvestimentoMarketing'} opts={valorMarketingOpts} mandatory={true} setFormInfo={setFormInfo} title={'qual o valor aproximado que investe atualmente em marketing, mensalmente? '} />
            <SingleChoice fieldName={'nif_type'} opts={nifTypeOpts} mandatory={true} setFormInfo={setFormInfo} title={'tens NIF de empresa ou estás em regime de IVA?'} />
            <ShortTextModule fieldName={'servicoProcura'} mandatory={true} setFormInfo={setFormInfo} title={'existe algum tipo de serviço que procure especificamente? qual/quais?'} />
            <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
        </>
    )
}