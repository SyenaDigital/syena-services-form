

export default function AlertStep({setStep}){

    return(
        <>
                        <span className='bigText'>este questionário é confidencial, e permite-nos ter acesso a informação fundamental antes de agendarmos uma reunião e de lhe apresentarmos a melhor proposta com base nas necessidades e objetivos do seu negócio.<span style={{ color: 'rgba(255, 255, 255, 1)' }}> pedimos-lhe, por favor, a maior honestidade quando o preencher.</span></span>
                        <span className='text'> ao submeter o questionário, dá-nos permissão para o contactarmos via whatsapp e/ou comunicarmos por email, assim como enviar promoções relacionadas. os seus dados estão protegidos.</span>
                        <button onClick={() => setStep(prev => prev + 1)} className='mainButton'>continuar</button>
                    </>
    )
}