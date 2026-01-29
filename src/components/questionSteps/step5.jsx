import { useEffect, useState } from "react"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"
import { icons } from "../../assets/icons"

export default function Step5({ setStep, formInfo, setFormInfo }) {

    let [allFilled, setAllFilled] = useState(false)


    useEffect(() => {
        if (
            formInfo?.objetivo?.length > 0 &&
            formInfo?.obstaculo?.length > 0
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    function goPrevBack() {
        // setFormInfo(prev => ({
        //     ...prev,
        //     objetivo: null,
        //     obstaculo: null,
        // }))
        setStep(prev => prev - 1)
    }

    return (
        <>
            <ShortTextModule fieldName={'objetivo'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'qual é o teu maior objetivo neste momento?'} />
            <ShortTextModule fieldName={'obstaculo'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'qual é o maior obstáculo que te está a impedir de alcançar esse objetivo?'} />
            <div className="navButtonWrapper">
                <button onClick={() => goPrevBack()} className='backButton'>{icons.backArrowIcon()}</button>
                <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
            </div>
        </>
    )
}