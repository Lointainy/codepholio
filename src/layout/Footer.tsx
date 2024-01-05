import React from 'react';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { Icon } from '@/components/standarts';

type FooterProps = {
	lang: Locale;
};

async function Footer({ lang }: FooterProps) {
	const currentYear = new Date().getFullYear();
	const { footer } = await getDictionary(lang);

	return (
		<footer className="text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; {currentYear} {footer.copy}
			</small>
			<div className="flex flex-wrap gap-4 justify-center items-center mt-4">
				<p className="text-xs" dangerouslySetInnerHTML={{ __html: footer.build }}></p>
				<a href={footer.code.url} className="flex items-center gap-2 text-gray-950 dark:text-white">
					<span>
						<Icon name="github" category="social" />
					</span>
					{footer.code.title}
				</a>
			</div>
		</footer>
	);
}

export default Footer;

