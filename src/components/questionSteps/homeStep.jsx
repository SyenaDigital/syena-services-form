

export default function HomeStep({ setStep }) {

    return (
        <>

            <h1 className='mainTitle'>TRANSFORMAMOS A TUA MARCA PESSOAL NUMA <span style={{ color: 'rgba(137, 137, 137, 1)' }}>REFERÊNCIA NACIONAL</span></h1>
            <span className='text'>segue o passo a passo e candidata-te a uma sessão de diagnóstico gratuita. <span style={{ color: 'rgb(203, 203, 203)' }}> exclusivo para pessoas que querem realmente transformar a sua marca pessoal numa referência nacional </span>e impulsionar o crescimento do seu negócio.</span>
            <button onClick={() => setStep(1)} className='mainButton'>começar</button>
        </>
    )
}