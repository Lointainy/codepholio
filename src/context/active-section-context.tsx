'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { links } from '@/lib/data';

type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextProviderProps = {
	children: React.ReactNode;
};

type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	isHomePage: boolean;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>('home');
	const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

	const pathName = usePathname();

	const isHomePage = pathName.split('/').length === 2;

	useEffect(() => {
		const validSectionNames: SectionName[] = links.map((link) => link.name);
		const linkName = pathName.split('/')[2];

		if (linkName && validSectionNames.includes(linkName as SectionName)) {
			setActiveSection(linkName as SectionName);
		}
	}, [pathName]);

	useEffect(() => {
		if (isHomePage && activeSection.length && activeSection !== 'home') {
			window.history.replaceState({}, '', `#${activeSection}`);
		} else {
			window.history.replaceState({}, '', window.location.pathname);
		}
	}, [isHomePage, pathName, activeSection]);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				isHomePage,
				timeOfLastClick,
				setTimeOfLastClick
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
	}

	return context;
}

