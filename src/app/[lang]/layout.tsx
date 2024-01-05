import type { Metadata } from 'next';

import { Locale, i18n } from '@/i18n.config';

import { Inter } from 'next/font/google';

import './globals.css';

import { Toaster } from 'react-hot-toast';

import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

import FloatNavigation from '@/components/FloatNavigation';
import LangSwitch from '@/components/LangSwitch';
import ThemeSwitch from '@/components/ThemeSwitch';
import { Footer } from '@/layout';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Eugi.dev | Codepholio',
	description: 'Eugene is Fullstack dev, github:@lointainy'
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
	return (
		<html lang={params.lang ?? i18n.defaultLocale}>
			<link rel="icon" href="/favicon.png" />
			<body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90  relative`}>
				<div className="bg-[#fbe2e3] dark:bg-[#946263] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
				<div className="bg-[#dbd7fb] dark:bg-[#676394] absolute -z-10 top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						{children}
						<div className="py-5">
							<Footer lang={params.lang} />
						</div>
						<Toaster position="top-right" />
						<FloatNavigation>
							<LangSwitch lang={params.lang} />
							<ThemeSwitch />
							<ScrollToTop />
						</FloatNavigation>
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}

