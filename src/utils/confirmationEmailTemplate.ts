import type { QuoteForm } from "@/types/quote";

function escapeHtml(value: string | undefined) {
    return (value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatService(service: QuoteForm["service"]) {
    const labels = {
        essentials: "Essentials website",
        custom: "Custom website / app",
        "not-sure": "Not sure yet",
    };

    return labels[service];
}

function formatBudget(budget: QuoteForm["budget"]) {
    const labels: Record<string, string> = {
        "under-500": "Under £500",
        "500-1000": "£500 - £1,000",
        "1000+": "£1,000+",
        "not-sure": "Not sure yet",
    };

    return budget ? labels[budget] ?? budget : "Not specified";
}

export function createConfirmationEmailHtml(data: QuoteForm) {
    const needsHtml =
        data.needs.length > 0
            ? data.needs
                .map(
                    (need) => `
                        <span style="
                            display:inline-block;
                            margin:0 6px 6px 0;
                            padding:7px 11px;
                            background:#f4f4f5;
                            border:1px solid #e4e4e7;
                            border-radius:999px;
                            font-size:13px;
                            color:#3f3f46;
                        ">
                            ${escapeHtml(need)}
                        </span>
                    `
                )
                .join("")
            : `<span style="color:#71717a;">None specified</span>`;

    return `
    <div style="
        margin:0;
        padding:32px 16px;
        background:#f4f4f5;
        font-family:Arial,Helvetica,sans-serif;
        color:#18181b;
    ">
        <div style="
            max-width:640px;
            margin:0 auto;
            background:#ffffff;
            border:1px solid #e4e4e7;
            border-radius:16px;
            overflow:hidden;
        ">

            <div style="
                padding:28px 32px;
                background:#18181b;
                color:#ffffff;
            ">
                <div style="
                    margin-bottom:8px;
                    font-size:13px;
                    font-weight:700;
                    letter-spacing:1.5px;
                    text-transform:uppercase;
                    color:#c084fc;
                ">
                    Mugz.Dev
                </div>

                <h1 style="
                    margin:0;
                    font-size:26px;
                    line-height:1.3;
                ">
                    We've received your request.
                </h1>

                <p style="
                    margin:8px 0 0;
                    color:#d4d4d8;
                    font-size:14px;
                    line-height:1.6;
                ">
                    Thanks for getting in touch. Your quote request has been received successfully.
                </p>
            </div>

            <div style="padding:32px;">

                <p style="
                    margin:0 0 16px;
                    font-size:16px;
                    line-height:1.7;
                ">
                    Hi ${escapeHtml(data.name)},
                </p>

                <p style="
                    margin:0 0 24px;
                    font-size:15px;
                    line-height:1.7;
                    color:#3f3f46;
                ">
                    Thanks for contacting Mugz.Dev. We'll review the details you've provided
                    and get back to you shortly to discuss your project and the next steps.
                </p>

                <div style="
                    padding:22px;
                    background:#fafafa;
                    border:1px solid #e4e4e7;
                    border-radius:12px;
                ">
                    <h2 style="
                        margin:0 0 18px;
                        font-size:18px;
                        color:#18181b;
                    ">
                        Your request
                    </h2>

                    <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        style="border-collapse:collapse;"
                    >
                        <tr>
                            <td style="
                                width:120px;
                                padding:8px 0;
                                color:#71717a;
                                font-size:14px;
                                vertical-align:top;
                            ">
                                Service
                            </td>

                            <td style="
                                padding:8px 0;
                                font-size:14px;
                                font-weight:600;
                                vertical-align:top;
                            ">
                                ${escapeHtml(formatService(data.service))}
                            </td>
                        </tr>

                        <tr>
                            <td style="
                                padding:8px 0;
                                color:#71717a;
                                font-size:14px;
                                vertical-align:top;
                            ">
                                Budget
                            </td>

                            <td style="
                                padding:8px 0;
                                font-size:14px;
                                vertical-align:top;
                            ">
                                ${escapeHtml(formatBudget(data.budget))}
                            </td>
                        </tr>

                        ${data.business
            ? `
                                <tr>
                                    <td style="
                                        padding:8px 0;
                                        color:#71717a;
                                        font-size:14px;
                                        vertical-align:top;
                                    ">
                                        Business
                                    </td>

                                    <td style="
                                        padding:8px 0;
                                        font-size:14px;
                                        vertical-align:top;
                                    ">
                                        ${escapeHtml(data.business)}
                                    </td>
                                </tr>
                                `
            : ""
        }
                    </table>

                    <div style="margin-top:18px;">
                        <div style="
                            margin-bottom:10px;
                            color:#71717a;
                            font-size:14px;
                        ">
                            What you need
                        </div>

                        <div>
                            ${needsHtml}
                        </div>
                    </div>
                </div>

                <div style="
                    margin-top:24px;
                    padding:20px;
                    background:#f4f4f5;
                    border-radius:12px;
                ">
                    <div style="
                        margin-bottom:8px;
                        font-size:12px;
                        font-weight:700;
                        letter-spacing:1px;
                        text-transform:uppercase;
                        color:#71717a;
                    ">
                        Your message
                    </div>

                    <div style="
                        font-size:14px;
                        line-height:1.7;
                        color:#3f3f46;
                        white-space:pre-wrap;
                    ">
                        ${escapeHtml(data.message)}
                    </div>
                </div>

                <p style="
                    margin:28px 0 0;
                    font-size:15px;
                    line-height:1.7;
                    color:#3f3f46;
                ">
                    If you'd like to add anything in the meantime, simply reply to this email.
                </p>

                <div style="
                    margin-top:28px;
                    font-size:14px;
                    line-height:1.6;
                ">
                    <strong>Yusaf Muthana</strong><br />
                    Lead Developer<br />
                    Mugz.Dev<br />
                    <a
                        href="mailto:hello@mugz.dev"
                        style="color:#7c3aed;text-decoration:none;"
                    >
                        hello@mugz.dev
                    </a>
                </div>

            </div>

            <div style="
                padding:18px 32px;
                background:#fafafa;
                border-top:1px solid #e4e4e7;
                color:#a1a1aa;
                font-size:12px;
                text-align:center;
            ">
                This email was sent automatically after submitting a quote request on Mugz.Dev.
            </div>

        </div>
    </div>
    `;
}