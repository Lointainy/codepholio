import { Locale } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';

import Navbar from '@/components/Navbar';
import { Header } from '@/layout';

type ServicesPageProps = {
	params: {
		lang: Locale;
	};
};

export default async function ServicesPage({ params: { lang } }: ServicesPageProps) {
	const intl = await getDictionary(lang);

	return (
		<>
			<Header>
				<Navbar navigation={intl.navigation} />
			</Header>

			<main className="pt-4 sm:pt-32 min-h-[85vh]">services page</main>
		</>
	);
}

