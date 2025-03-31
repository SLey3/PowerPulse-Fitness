export function generateSignUpHtml(name: string, frontend_url: string, confirmation_token: string): string {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .header {
                    background-color: #0066cc;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    border-radius: 5px 5px 0 0;
                }
                .content {
                    padding: 20px;
                }
                .button {
                    display: inline-block;
                    background-color: #0066cc;
                    color: white;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Welcome to PowerPulse Fitness!</h2>
                </div>
                <div class="content">
                    <p>Hello ${name},</p>
                    <p>Thank you for creating an account with PowerPulse Fitness!</p>
                    <p>Please confirm your email address by clicking the button below:</p>
                    <p><a class="button" href="${frontend_url}/auth/verify-email?token=${confirmation_token}">Verify Email</a></p>
                    <p><strong>Important:</strong> This verification link will expire in 48 hours.</p>
                    <p>If you did not create this account, please ignore this email.</p>
                </div>
                <div class="footer">
                    <p>PowerPulse Fitness Team</p>
                    <p>This is an automated message, please do not reply.</p>
                </div>
            </div>
        </body>
        </html>
        `;
}
