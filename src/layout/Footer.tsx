import React from 'react';

import { getDictionary } from '@/lib/dictionary';

async function Footer({ lang }) {
	const currentYear = new Date().getFullYear();
	const { footer } = await getDictionary(lang);

	return (
		<footer className="text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; {currentYear} {footer.copy}
			</small>
			<p className="text-xs mt-4" dangerouslySetInnerHTML={{ __html: footer.build }}></p>
		</footer>
	);
}

export default Footer;
