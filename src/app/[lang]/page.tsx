import { Locale } from '@/i18n.config';

import { About, Contact, Experience, Hero, Projects, SectionDivider, Skills } from '@/components/sections';
import { getDictionary } from '@/lib/dictionary';

import Navbar from '@/components/Navbar';
import { Header } from '@/layout';

type HomePageProps = {
	params: {
		lang: Locale;
	};
};

export default async function Home({ params: { lang } }: HomePageProps) {
	const intl = await getDictionary(lang);

	return (
		<>
			<Header>
				<Navbar navigation={intl.navigation} />
			</Header>
			<main className="pt-4 sm:pt-32">
				<div className="flex flex-col px-2 sm:px-4 justify-center items-center">
					<Hero intl={intl.page.hero} />
					<SectionDivider />
					<About intl={intl.page.about} />
					<Projects intl={intl.page.projects} />
					<Skills intl={intl.page.skills} />
					<Experience intl={intl.page.experience} />
					<Contact intl={intl.page.contact} />
				</div>
			</main>
		</>
	);
}

