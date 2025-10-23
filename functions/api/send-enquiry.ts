export const onRequest = async (context: any) => {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { from_name, from_email, phone, service, message } = body || {};

    if (!from_name || !from_email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const subject = `New enquiry from ${from_name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin: 0 0 12px;">New Enquiry</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Phone:</strong> ${phone || '-'} </p>
        <p><strong>Service:</strong> ${service || '-'} </p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    const apiKey = env?.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing RESEND_API_KEY' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Y3 Smiles Dental <onboarding@resend.dev>',
        to: ['smile@enquiries.y3smilesdental.com.au'],
        reply_to: from_email,
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return new Response(JSON.stringify({ error: 'Failed to send email', details: text }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
