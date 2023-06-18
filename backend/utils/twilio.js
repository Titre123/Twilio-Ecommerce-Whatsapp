import twilio from 'twilio';
import * as dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = twilio(accountSid, authToken);

export async function sendMessage(message, recipient) {
    const response = await client.messages.create({
        body: message,
        from: `whatsapp:${process.env.TWILIO_PHONE}`,
        to: `whatsapp:${recipient}`
    })
}