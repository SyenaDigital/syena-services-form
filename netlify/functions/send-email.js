const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);

        // Send email
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Use this for testing, or your verified domain
            to: 'chikengorme@gmail.com', // Your email where you want to receive notifications
            subject: 'Syena | Pedido de serviços',
            html: `
        <h2>Novo preenchimendo de formumlário de serviços</h2>
        <p><strong>Nome:</strong> ${data.nome || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Telefone:</strong> ${data.numero_whatsapp || 'N/A'}</p>
        <p><strong>Instagram:</strong> ${data.insta_name || 'N/A'}</p>
        <p><strong>Preenchido a::</strong> ${new Date().toLocaleString()}</p>
      `
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' })
        };
    }
};