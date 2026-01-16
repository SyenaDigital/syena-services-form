import { useEffect, useState } from "react"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"


export default function Step3({setStep, formInfo, setFormInfo}){

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

    return(
        <>
        <ShortTextModule fieldName={'anosDeNegocio'} mandatory={true} setFormInfo={setFormInfo} title={'há quantos anos desenvolve o negócio para o qual precisa de ajuda?'}/>
        <ShortTextModule fieldName={'website'} mandatory={false} setFormInfo={setFormInfo} title={'Tens Website? Se sim, qual?'}/>
        <ShortTextModule fieldName={'produtosEServicos'} mandatory={true} setFormInfo={setFormInfo} title={'quais os produtos/serviços que vende atualmente, para que público e a que preço?'}/>
         <button onClick={() => allFilled ? setStep(prev => prev + 1) : alert('Por favor preenche todos os campos obrigatórios')} className='mainButton'>continuar</button>
        </>
    )
}