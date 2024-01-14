'use client';
import React from 'react';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import { SendEmailResponseErrorType, sendEmail } from '@/actions/sendEmail';

import { SendButton } from '@/components/standarts';
import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';

import { PageSectionsType } from '@/types/data';

interface ContactProps {
	intl: PageSectionsType['contact'];
}

const fadeInAnimationVar = {
	initial: {
		opacity: 0,
		y: 100
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index
		}
	})
};

function Contact({ intl }: ContactProps) {
	const submitForm = async (formData: FormData) => {
		const result = await sendEmail(formData);

		if (result === undefined) {
			console.error('sendEmail returned undefined');
			return;
		}

		if ('error' in result) {
			const { error } = result as SendEmailResponseErrorType;

			if (error) {
				toast.error(error);
				return;
			}
		}

		toast.success('Email sent successfully');
	};

	return (
		<SectionContainer id="contact" lastSection>
			<SectionHeading>{intl.title}</SectionHeading>
			<motion.div
				variants={fadeInAnimationVar}
				initial="initial"
				whileInView="animate"
				viewport={{
					once: true
				}}
				custom={1}
			>
				<p className="mb-8 p-0 text-gray-400 w-fit sm:w-[450px]" dangerouslySetInnerHTML={{ __html: intl.subtitle }}></p>
			</motion.div>

			<form className="flex-grow-1 flex flex-col gap-4" action={async (formData) => await submitForm(formData)}>
				<motion.input
					variants={fadeInAnimationVar}
					initial="initial"
					whileInView="animate"
					viewport={{
						once: true
					}}
					custom={2}
					type="email"
					placeholder={intl.placeholder.email}
					name="senderEmail"
					required
					maxLength={500}
					className="h-14 rounded-lg dark:bg-white/10 dark:text-white/80 py-2 px-4 border border-black/10 focus-visible:outline-black"
				/>
				<motion.textarea
					variants={fadeInAnimationVar}
					initial="initial"
					whileInView="animate"
					viewport={{
						once: true
					}}
					custom={3}
					cols={30}
					rows={10}
					name="senderMessage"
					required
					maxLength={500}
					placeholder={intl.placeholder.message}
					className="h-52 rounded-lg px-4 py-2 dark:bg-white/10 dark:text-white/80 border border-black/10 focus-visible:outline-black"
				/>
				<motion.div
					variants={fadeInAnimationVar}
					initial="initial"
					whileInView="animate"
					viewport={{
						once: true
					}}
					custom={4}
				>
					<SendButton btnText={intl.buttons.send} />
				</motion.div>
			</form>
		</SectionContainer>
	);
}

export default Contact;

