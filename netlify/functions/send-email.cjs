const { Resend } = require('resend');

exports.handler = async (event) => {
    console.log('=== Function started ===');
    console.log('Has API key:', !!process.env.RESEND_API_KEY);
    console.log('API key prefix:', process.env.RESEND_API_KEY?.substring(0, 7));

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = JSON.parse(event.body);

        console.log('Attempting to send email...');

        const result = await resend.emails.send({
            from: 'sergio@syenadigital.com',
            to: 'chikengorme@gmail.com',
            subject: 'Syena | Pedido de serviços',
            html: `
        <h2>Preenchimento de formulário de serviços</h2>
        <p><strong>Nome:</strong> ${data.nome || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Telefone:</strong> ${data.numero_whatsapp || 'N/A'}</p>
        <p><strong>Instagram:</strong> ${data.insta_name || 'N/A'}</p>
        <p><strong>Preenchido a:</strong> ${new Date().toLocaleString()}</p>
      `
        });

        console.log('Email sent!', result);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('=== ERROR ===');
        console.error('Error message:', error.message);
        console.error('Full error:', JSON.stringify(error, null, 2));

        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};