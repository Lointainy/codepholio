'use client';

import React, { ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';

import { twMerge } from 'tailwind-merge';

import Link, { LinkProps } from 'next/link';
import { Icon } from '@/components/standarts';

const btn =
	'py-3 px-7 group min-h-[3rem] min-w-[3rem] flex gap-2 items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer font-medium';

const icon = 'p-4';

const btnVariants = {
	primary: 'bg-gray-900 text-white hover:bg-gray-950',
	primaryAlt: 'bg-gray-900 dark:bg-white/20 text-white hover:bg-gray-950',
	secondary: 'bg-white dark:bg-white/10',
	secondaryAlt: 'bg-gray-900 dark:bg-white/20 hover:bg-gray-950'
};

type SendButtonProps = {
	btnText: string;
};

type ButtonProps = {
	btnClassName: 'primary' | 'primaryAlt' | 'secondary' | 'secondaryAlt';
	btnLink?: boolean;
	btnIcon?: boolean;
	children: React.ReactNode;
	target?: string;
	download?: boolean;
} & (ButtonHTMLAttributes<HTMLButtonElement> | LinkProps);

function SendButton({ btnText }: SendButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className={`${btn} ${btnVariants.primaryAlt} disabled:scale-100 disabled:bg-opacity-50 w-full`}
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

const Button: React.FC<ButtonProps> = (props) => {
	const { btnClassName, btnLink, btnIcon, ...btnProps } = props;

	if (btnLink) {
		return (
			<Link {...(btnProps as LinkProps)} className={twMerge(`${btn} ${btnVariants[btnClassName]}`, `${btnIcon && icon}`)}>
				{props.children}
			</Link>
		);
	}

	return (
		<button
			{...(btnProps as ButtonHTMLAttributes<HTMLButtonElement>)}
			className={twMerge(`${btn} ${btnVariants[btnClassName]}`, `${btnIcon && icon}`)}
		>
			{props.children}
		</button>
	);
};

export { Button, SendButton };

