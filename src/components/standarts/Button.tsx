'use client';

import React from 'react';

import { useFormStatus } from 'react-dom';

import { Icon } from '@/components/standarts';

type SendButtonProps = {
	btnText: string;
};

function SendButton({ btnText }: SendButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className="group flex items-center justify-center bg-gray-900 dark:bg-white/20 text-white  gap-2 rounded-full outline-none transition cursor-pointer px-7 py-3 w-full focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-50"
			disabled={pending}
		>
			{btnText}
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<Icon name="send" className="group-hover:-translate-y-2 group-hover:translate-x-1  transition-all" />
			)}
		</button>
	);
}

export default SendButton;

