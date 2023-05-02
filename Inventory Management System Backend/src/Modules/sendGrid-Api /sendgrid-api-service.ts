import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SendGridService {
  constructor(private readonly configService: ConfigService) {
    
  }

  async sendEmail(email: string, emailSubject: string, body: string) {
    console.log(this.configService.get('send_GridApi_Key'));
    
    sgMail.setApiKey(this.configService.get('send_GridApi_Key'));
    const fromEmail = this.configService.get('fromEmail');
    const data = {
      to: email,
      from: fromEmail,
      subject: emailSubject,
      html: body,
    };

    await sgMail.send(data);
  }
}