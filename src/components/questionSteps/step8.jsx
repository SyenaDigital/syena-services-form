import { useEffect, useState } from "react"
import ShortTextModule from "../form-modules/shortTextModule/shortTextModule"
import submitFormToSupabase from "../../utilities/supabaseSubmition"

export default function Step8({ setStep, formInfo, setFormInfo }) {

    let [allFilled, setAllFilled] = useState(false)

    async function sendInfo() {
        if (allFilled) {
            setStep(prev => prev + 1);


            await submitFormToSupabase(formInfo);


            try {
                await fetch('/api/send-email', {  // ✅ Vercel API route
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formInfo)
                });
            } catch (error) {
                console.error('Error sending email:', error);
            }

            return
        }
        alert('Por favor preenche todos os campos obrigatórios')
        return
    }

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

    return (
        <>
            <ShortTextModule fieldName={'numeroWhatsapp'} mandatory={true} setFormInfo={setFormInfo} title={'qual o seu número de WhatsApp?'} />
            <ShortTextModule fieldName={'email'} mandatory={true} setFormInfo={setFormInfo} title={'qual é email através do qual o podemos contactar? '} />
            <button onClick={() => sendInfo()} className='mainButton'>enviar</button>
        </>
    )
}