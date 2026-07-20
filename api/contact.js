export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body;

    if (!body.name || !body.email || !body.message || !body.service) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const payload = {
      name: body.name,
      email: body.email,
      company: body.company || "",
      service: body.service,
      budget: body.budget || "",
      message: body.message,
      source: "kritrajnexera.com",
      timestamp: new Date().toISOString(),
    };

    // Send to n8n webhook or email
    if (process.env.N8N_WEBHOOK_URL) {
      await fetch(process.env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    // Send email via Resend or similar
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "KritRaj Nexera <noreply@kritrajnexera.com>",
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New inquiry from ${body.name}`,
        text: `Name: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company}\nService: ${body.service}\nBudget: ${body.budget}\nMessage: ${body.message}`,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
