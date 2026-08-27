import type { QuoteForm } from "@/types/quote";

function escapeHtml(value: string | undefined) {
    return (value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function createQuoteEmailHtml(data: QuoteForm) {
    const needsHtml =
        data.needs.length > 0
            ? `
        <ul style="
          margin:0;
          padding-left:20px;
          line-height:1.8;
        ">
          ${data.needs
                .map((need) => `<li>${escapeHtml(need)}</li>`)
                .join("")}
        </ul>
      `
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
        border-radius:16px;
        overflow:hidden;
        border:1px solid #e4e4e7;
        ">

        <div style="
            padding:28px 32px;
            background:#18181b;
            color:#ffffff;
        ">
            <div style="
            font-size:13px;
            font-weight:700;
            letter-spacing:1.5px;
            text-transform:uppercase;
            color:#c084fc;
            margin-bottom:8px;
            ">
            MUGZ
            </div>

            <h1 style="
            margin:0;
            font-size:26px;
            line-height:1.3;
            ">
            New Quote Request
            </h1>

            <p style="
            margin:8px 0 0;
            color:#d4d4d8;
            font-size:14px;
            ">
            A new enquiry has been submitted through your website.
            </p>
        </div>

        <div style="padding:32px;">

            <h2 style="
            margin:0 0 18px;
            font-size:18px;
            ">
            Contact details
            </h2>

            <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            style="border-collapse:collapse;"
            >
            <tr>
                <td style="padding:9px 0;color:#71717a;width:120px;">Name</td>
                <td style="padding:9px 0;font-weight:600;">
                ${escapeHtml(data.name)}
                </td>
            </tr>

            <tr>
                <td style="padding:9px 0;color:#71717a;">Business</td>
                <td style="padding:9px 0;">
                ${escapeHtml(data.business ?? "-")}
                </td>
            </tr>

            <tr>
                <td style="padding:9px 0;color:#71717a;">Email</td>
                <td style="padding:9px 0;">
                ${escapeHtml(data.email)}
                </td>
            </tr>

            <tr>
                <td style="padding:9px 0;color:#71717a;">Phone</td>
                <td style="padding:9px 0;">
                ${escapeHtml(data.phone ?? "-")}
                </td>
            </tr>
            </table>

            <div style="
            height:1px;
            background:#e4e4e7;
            margin:28px 0;
            "></div>

            <h2 style="
            margin:0 0 18px;
            font-size:18px;
            ">
            Project details
            </h2>

            <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            style="border-collapse:collapse;"
            >
            <tr>
                <td style="padding:9px 0;color:#71717a;width:120px;">Service</td>
                <td style="padding:9px 0;">
                ${escapeHtml(data.service)}
                </td>
            </tr>

            <tr>
                <td style="padding:9px 0;color:#71717a;">Budget</td>
                <td style="padding:9px 0;">
                ${escapeHtml(data.budget ?? "-")}
                </td>
            </tr>

            <tr>
                <td style="padding:9px 0;color:#71717a;">Website</td>
                <td style="padding:9px 0;">
                ${escapeHtml(data.website ?? "-")}
                </td>
            </tr>
            </table>

            <div style="margin-top:22px;">
            <div style="
                margin-bottom:8px;
                color:#71717a;
                font-size:14px;
            ">
                Requirements
            </div>

            ${needsHtml}
            </div>

            <div style="
            margin-top:28px;
            padding:20px;
            border-radius:12px;
            background:#f4f4f5;
            ">
            <div style="
                margin-bottom:8px;
                font-size:13px;
                font-weight:700;
                color:#71717a;
                text-transform:uppercase;
                letter-spacing:1px;
            ">
                Message
            </div>

            <div style="
                font-size:15px;
                line-height:1.7;
            ">
                ${escapeHtml(data.message)}
            </div>
            </div>

        </div>

        <div style="
            padding:20px 32px;
            background:#fafafa;
            border-top:1px solid #e4e4e7;
            color:#71717a;
            font-size:12px;
        ">
            Submitted through the MUGZ quote form.
        </div>

        </div>
    </div>
    `;
}
