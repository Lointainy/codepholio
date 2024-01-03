'use server'

import React from 'react';

import { Resend } from 'resend';

import ContactFormEmail from '@/email/ContactFormEmail';
import { email as recipientEmail } from '@/lib/data';


const API_KEY = process.env.RESEND_API_KEY
const resend = new Resend(API_KEY)

const validateString = (value: unknown, maxLengh: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLengh) {
        return false
    }

    return true
}


export type SendEmailResponseSuccessType = {
    data: any; // Define the actual type of the 'data' property
}

export type SendEmailResponseErrorType = {
    error: string;
}

// Updated return type to exclude undefined
export const sendEmail = async (formData: FormData): Promise<SendEmailResponseSuccessType | SendEmailResponseErrorType | undefined> => {
    const msg = formData.get('senderMessage');
    const email = {
        sender: formData.get('senderEmail'),
        recipient: recipientEmail,
    };

    if (!validateString(email.sender, 500) || !validateString(email.recipient, 500)) {
        return {
            error: 'invalid email',
        };
    }

    if (!validateString(msg, 5000) || !msg) {
        return {
            error: 'Invalid message',
        };
    }

    try {
        const req = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: email.recipient as string,
            subject: 'Message from contact form',
            reply_to: email.sender as string,
            react: React.createElement(ContactFormEmail, {
                msg: msg as string,
                senderEmail: email.sender as string,
            }),
        });

        if (req.error) {
            return {
                error: req.error.message,
            };
        }

        return {
            data: req.data,
        };
    } catch (error) {
        return {
            error: (error as Error).message,
        };
    }
};

