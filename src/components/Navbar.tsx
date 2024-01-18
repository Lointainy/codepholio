'use client';

import React from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { useActiveSectionContext } from '@/context/active-section-context';

import { links } from '@/lib/data';

import { NavigationType } from '@/types/data';

type SectionName = (typeof links)[number]['name'];

interface NavbarProps {
	navigation: NavigationType;
}

function Navbar({ navigation }: NavbarProps) {
	const { activeSection, setActiveSection, setTimeOfLastClick, isHomePage } = useActiveSectionContext();

	const handleLinkClick = (linkName: SectionName) => {
		setActiveSection(linkName);
		setTimeOfLastClick(Date.now());
	};

	return (
		<>
			<motion.nav
				className="mt-0 sm:mt-6 px-2 py-3 sm:py-1 w-full sm:w-fit min-h-[3.5rem] rounded-none border border-white dark:border-gray-950 border-opacity-40 bg-white dark:bg-gray-950 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full flex justify-center"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
					{links.map(
						(link) =>
							link.isVisible && (
								<motion.li
									className="flex items-center justify-center relative"
									key={link.hash}
									initial={{ y: -50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
								>
									<Link
										className={clsx(
											'flex w-full items-center justify-center px-3 py-2 dark:hover:text-white transition ',
											{
												'text-white hover:text-gray-300 hover:dark:text-gray-100': activeSection === link.name
											},
											{
												'hover:text-gray-950': activeSection !== link.name
											}
										)}
										href={isHomePage ? link.hash : `/${link.hash}`}
										onClick={() => handleLinkClick(link.name)}
									>
										{navigation[link.name]}
										{link.name === activeSection && (
											<motion.span
												className="bg-gray-900 dark:bg-gray-700 text-white rounded-full absolute inset-0 -z-10"
												layoutId="activeSection"
												transition={{
													type: 'spring',
													stiffness: 380,
													damping: 30
												}}
											></motion.span>
										)}
									</Link>
								</motion.li>
							)
					)}
				</ul>
			</motion.nav>
		</>
	);
}

export default Navbar;

