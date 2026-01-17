const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('URL:', SUPABASE_URL)
console.log('Key exists:', !!SUPABASE_ANON_KEY)


export default async function submitFormToSupabase(formInfo) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/services-form-responses`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                nome: formInfo.nome,
                insta_name: formInfo.instaName,
                motivo_contacto: formInfo.motivoContacto,
                anos_de_negocio: formInfo.anosDeNegocio,
                website: formInfo.website || null,
                produtos_e_servicos: formInfo.produtosEServicos,
                faturacao: formInfo.faturacao,
                tipos_de_marketing_atual: formInfo.tiposDeMarketingAtual,
                objetivo: formInfo.objetivo,
                obstaculo: formInfo.obstaculo,
                quantidade_clientes_quer_atrair: formInfo.quantidadeClientesQuerAtrair,
                valor_investimento_marketing: formInfo.valorInvestimentoMarketing,
                servico_procura: formInfo.servicoProcura,
                como_chegou: formInfo.comoChegou,
                quando_comecar: formInfo.quandoComecar,
                numero_whatsapp: formInfo.numeroWhatsapp,
                email: formInfo.email,
                nif_type: formInfo.nif_type
            })
        })

        if (response.ok) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Error:', error)
        return false
    }
}
