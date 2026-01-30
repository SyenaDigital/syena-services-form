import { Resend } from 'resend'


export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = req.body;

        const result = await resend.emails.send({
            from: 'Syena@syenadigital.com',
            to: 'chikengorme@gmail.com',
            cc: ['sergio@syenadigital.com'],
            subject: 'Syena | Pedido de serviços',
            html: `
        <h2>Preenchimento de formulário de serviços</h2>
        <p><strong>Nome:</strong> ${data.nome || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Telefone:</strong> ${data.numeroWhatsapp || 'N/A'}</p>
        <p><strong>Instagram:</strong> ${data.instaName || 'N/A'}</p>
        <p><strong>Preenchido a:</strong> ${new Date().toLocaleString()}</p>
      `
        });

        return res.status(200).json({ message: 'Email sent successfully', result });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
}





// Final code

// import { Resend } from 'resend'


// export default async function handler(req, res) {
//     // Only allow POST
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method not allowed' });
//     }

//     try {
//         const resend = new Resend(process.env.RESEND_API_KEY);
//         const data = req.body;

//         const result = await resend.emails.send({
//             from: 'Syena@syenadigital.com',
//             to: 'andre@syenadigital.com',
//             cc: ['sergio@syenadigital.com', 'laura@syenadigital.com', 'propostas@syenadigital.com'],
//             subject: 'Syena | Pedido de serviços',
//             html: `
//         <h2>Preenchimento de formulário de serviços</h2>
//         <p><strong>Nome:</strong> ${data.nome || 'N/A'}</p>
//         <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
//         <p><strong>Telefone:</strong> ${data.numeroWhatsapp || 'N/A'}</p>
//         <p><strong>Instagram:</strong> ${data.instaName || 'N/A'}</p>
//         <p><strong>Preenchido a:</strong> ${new Date().toLocaleString()}</p>
//       `
//         });

//         return res.status(200).json({ message: 'Email sent successfully', result });
//     } catch (error) {
//         console.error('Error:', error);
//         return res.status(500).json({ error: error.message });
//     }
// }