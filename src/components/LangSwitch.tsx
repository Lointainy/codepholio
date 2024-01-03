'use client';

import React from 'react';

import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Locale, i18n } from '@/i18n.config';

type LangSwitchProps = {
	lang: Locale;
};

function LangSwitch({ lang }: LangSwitchProps) {
	const pathName = usePathname();

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<div className="flex items-center justify-center p-4 rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 backdrop-blur-[0.5rem] border border-white dark:border-gray-950 border-opacity-40 shadow-2xl hover:scale-105 active:scale-105 transition-all">
			{i18n.locales.map((locale: string, index: number) => (
				<React.Fragment key={index}>
					<Link
						className={clsx('text-white dark:text-gray-950 hover:text-white/80 transition-all', {
							'font-bold': lang === locale
						})}
						href={redirectedPathName(locale)}
					>
						{locale}
					</Link>
					{index !== i18n.locales.length - 1 && <span className="text-white dark:text-gray-950 mx-2">|</span>}
				</React.Fragment>
			))}
		</div>
	);
}

export default LangSwitch;

