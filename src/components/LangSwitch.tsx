'use client';

import React from 'react';

import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Locale, i18n } from '@/i18n.config';
import { useActiveSectionContext } from '@/context/active-section-context';

type LangSwitchProps = {
	lang: Locale;
};

function LangSwitch({ lang }: LangSwitchProps) {
	const { activeSection } = useActiveSectionContext();
	const pathName = usePathname();

	const redirectedPathName = (locale: string) => {
		const segments = pathName.split('/');
		const hash = `#${activeSection}`;

		segments[1] = locale;

		if (!pathName) {
			return '/';
		} else if (activeSection != 'home' || !hash.length) {
			return segments.join('') + hash;
		} else {
			return segments.join('');
		}
	};

	return (
		<div className="flex items-center justify-center p-4 rounded-full bg-gray-950 dark:bg-white/20 text-white  backdrop-blur-[0.5rem] border border-white dark:border-gray-950 border-opacity-40 shadow-2xl hover:scale-105 active:scale-105 transition-all">
			{i18n.locales.map((locale: string, index: number) => (
				<React.Fragment key={index}>
					<Link
						className={clsx('transition-all', {
							'font-bold': lang === locale
						})}
						href={redirectedPathName(locale)}
						aria-label={`Switch language to ${locale}`}
					>
						{locale}
					</Link>
					{index !== i18n.locales.length - 1 && <span className="mx-2">|</span>}
				</React.Fragment>
			))}
		</div>
	);
}

export default LangSwitch;

