

export default function AlertStep({ setStep }) {

    return (
        <>
            <span className='bigText'>este questionário é confidencial, e permite-nos ter acesso a informação crucial antes de agendarmos uma sessão de diagnóstico e de te apresentarmos a melhor proposta para as tuas necessidades.<span style={{ color: 'rgba(255, 255, 255, 1)' }}> pedimos-te, por favor, a maior honestidade ao responder.</span></span>
            <span className='text'> ao submeteres o questionário, dás-nos permissão para te contactarmos via whatsapp e/ou comunicarmos por email, assim como enviar promoções relacionadas. os teus dados estão protegidos.</span>
            <button onClick={() => setStep(prev => prev + 1)} className='mainButton'>continuar</button>
        </>
    )
}