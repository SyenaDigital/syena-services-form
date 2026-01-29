import { useEffect, useState } from "react"
import SingleChoice from "../form-modules/singelChoice/singleChoice"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"
import { icons } from "../../assets/icons"

export default function Step7({ setStep, formInfo, setFormInfo }) {

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

    function goPrevBack() {
        // setFormInfo(prev => ({
        //     ...prev,
        //     comoChegou: null,
        //     quandoComecar: null,
        // }))
        setStep(prev => prev - 1)
    }


    return (
        <>
            <ShortTextModule fieldName={'comoChegou'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'como chegaste até nós?'} />
            <ShortTextModule fieldName={'quandoComecar'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'quando desejas começar a trabalhar connosco?'} />
            <div className="navButtonWrapper">
                <button onClick={() => goPrevBack()} className='backButton'>{icons.backArrowIcon()}</button>
                <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
            </div>
        </>
    )
}