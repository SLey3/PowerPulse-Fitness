import type {
  SendSmtpEmailSender,
  SendSmtpEmailToInner,
} from '@getbrevo/brevo';

export class EmailSendDto {
  subject: string;
  content: string;
  sender: SendSmtpEmailSender;
  to: SendSmtpEmailToInner[];
}
