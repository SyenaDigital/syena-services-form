import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"
import MultipleChoice from "../form-modules/multipleChoice/multipleChoice"
import { useEffect, useState } from "react"
import { icons } from "../../assets/icons"

export default function Step3({ setStep, formInfo, setFormInfo, }) {



    const motivosOpts = [
        'comunicação de marca pessoal',
        'comunicação de um negócio específico',
        'comunicação de empresa'
    ]

    let [allFilled, setAllFilled] = useState(false)

    useEffect(() => {
        if (
            formInfo?.nome?.length > 0 &&
            formInfo?.instaName?.length > 0 &&
            formInfo?.motivoContacto?.length > 0
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    function goPrevBack() {
        // setFormInfo(prev => ({
        //     ...prev,
        //     nome: null,
        //     instaName: null,
        //     motivoContacto: null
        // }))
        setStep(prev => prev - 1)
    }

    return (
        <>
            <ShortTextModule fieldName={'nome'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'qual é o teu nome?'} />
            <ShortTextModule fieldName={'instaName'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'qual o @ do teu instagram?'} />
            <MultipleChoice opts={motivosOpts} fieldName={'motivoContacto'} formInfo={formInfo} mandatory={true} setFormInfo={setFormInfo} title={'está a contactar-nos porque precisas de ajuda para...'} />
            <div className="navButtonWrapper">
                <button onClick={() => goPrevBack()} className='backButton'>{icons.backArrowIcon()}</button>
                <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
            </div>
        </>
    )
}