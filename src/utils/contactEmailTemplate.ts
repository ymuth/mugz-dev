import type { ContactForm } from "@/types/contact";

function escapeHtml(value: string | undefined) {
    return (value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function createContactEmailHtml(data: ContactForm) {
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
                    New Contact Enquiry
                </h1>

                <p style="
                    margin:8px 0 0;
                    color:#d4d4d8;
                    font-size:14px;
                    line-height:1.6;
                ">
                    A new message has been submitted through the contact form.
                </p>
            </div>

            <div style="padding:32px;">

                <h2 style="
                    margin:0 0 18px;
                    font-size:18px;
                    color:#18181b;
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
                        <td style="
                            width:120px;
                            padding:9px 0;
                            color:#71717a;
                            vertical-align:top;
                        ">
                            Name
                        </td>

                        <td style="
                            padding:9px 0;
                            font-weight:600;
                            vertical-align:top;
                        ">
                            ${escapeHtml(data.name)}
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding:9px 0;
                            color:#71717a;
                            vertical-align:top;
                        ">
                            Email
                        </td>

                        <td style="
                            padding:9px 0;
                            vertical-align:top;
                        ">
                            ${escapeHtml(data.email)}
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding:9px 0;
                            color:#71717a;
                            vertical-align:top;
                        ">
                            Subject
                        </td>

                        <td style="
                            padding:9px 0;
                            vertical-align:top;
                        ">
                            ${escapeHtml(data.subject)}
                        </td>
                    </tr>
                </table>

                <div style="
                    height:1px;
                    background:#e4e4e7;
                    margin:28px 0;
                "></div>

                <div style="
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
                        Message
                    </div>

                    <div style="
                        font-size:15px;
                        line-height:1.7;
                        color:#3f3f46;
                    ">
                        ${escapeHtml(data.message)}
                    </div>
                </div>

                <div style="
                    margin-top:28px;
                    padding:16px 18px;
                    background:#fafafa;
                    border:1px solid #e4e4e7;
                    border-radius:10px;
                    font-size:13px;
                    line-height:1.6;
                    color:#71717a;
                ">
                    You can reply directly to this email to respond to
                    ${escapeHtml(data.name)}.
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
                Submitted through the Mugz.Dev contact form.
            </div>

        </div>
    </div>
    `;
}