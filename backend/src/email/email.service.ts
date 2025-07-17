import { Injectable, ServiceUnavailableException, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as brevo from '@getbrevo/brevo'

@Injectable()
export class EmailService {
    private brevoInstance: brevo.TransactionalEmailsApi
    private readonly logger = new Logger(EmailService.name)
    
    constructor(private configService: ConfigService) {
        this.brevoInstance = new brevo.TransactionalEmailsApi()
    }

    async send(subject: string, content: string, sender: brevo.SendSmtpEmailSender, to: brevo.SendSmtpEmailToInner[]) {
        let logger = this.logger
        this.brevoInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, this.configService.get<string>("BREVO_API_KEY")!)

        let sendSmtpEmail = new brevo.SendSmtpEmail()
        sendSmtpEmail.subject = subject
        sendSmtpEmail.htmlContent = content
        sendSmtpEmail.sender = sender
        sendSmtpEmail.to = to

        await this.brevoInstance.sendTransacEmail(sendSmtpEmail)
        .then(function (data) {
            logger.log("[EMAIL TRANSACTION] sent email: ", data.response)
        }, function (err) {
            throw new ServiceUnavailableException('Email Service currently unavailable', {
                cause: err,
                description: 'Brevo Email Provider failed to send Transactional Email'
            })
        })
    }
}
