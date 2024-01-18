import { Locale } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';

import Navbar from '@/components/Navbar';
import { Header } from '@/layout';
import SectionContainer from '@/components/sections/SectionContainer';

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

			<main className="pt-4 sm:pt-32 min-h-[85vh]">
				<div className="flex flex-col px-2 sm:px-4 justify-center items-center">
					<SectionContainer id="services">
						<div className="h-[22rem]">
							<p className="font-bold">Coming soon</p>
							<a href="/" className="mt-2 underline">
								Back to Home
							</a>
						</div>
					</SectionContainer>
				</div>
			</main>
		</>
	);
}

