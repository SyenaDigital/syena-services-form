import { useEffect, useState } from "react"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"
import { icons } from "../../assets/icons"

export default function Step3({ setStep, formInfo, setFormInfo }) {

    let [allFilled, setAllFilled] = useState(false)


    useEffect(() => {
        if (
            formInfo?.anosDeNegocio?.length > 0 &&
            formInfo?.produtosEServicos?.length > 0
        ) {
            setAllFilled(true)
        } else {
            setAllFilled(false)
        }
    }, [formInfo])

    function goPrevBack() {
        // setFormInfo(prev => ({
        //     ...prev,
        //     anosDeNegocio: null,
        //     produtosEServicos: null,
        // }))
        setStep(prev => prev - 1)
    }


    return (
        <>
            <ShortTextModule fieldName={'anosDeNegocio'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'há quantos anos desenvolves o negócio para o qual precisa de ajuda?'} />
            <ShortTextModule fieldName={'website'} mandatory={false} formInfo={formInfo} setFormInfo={setFormInfo} title={'tens website? partilha aqui o link, por favor.'} />
            <ShortTextModule fieldName={'produtosEServicos'} mandatory={true} formInfo={formInfo} setFormInfo={setFormInfo} title={'quais os produtos/serviços que vendes atualmente, para que público e a que preço?'} />
            <div className="navButtonWrapper">
                <button onClick={() => goPrevBack()} className='backButton'>{icons.backArrowIcon()}</button>
                <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
            </div>
        </>
    )
}