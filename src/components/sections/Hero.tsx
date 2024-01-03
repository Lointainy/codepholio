'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { motion } from 'framer-motion';

import { Icon } from '@/components/standarts';
import SectionContainer from './SectionContainer';

import { PageSectionsType } from '@/types/data';

interface HeroProps {
	intl: PageSectionsType['hero'];
}

function Hero({ intl }: HeroProps) {
	return (
		<SectionContainer id="home">
			<div className="flex items-center justify-center">
				<div className="relative z-0">
					<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: 0.2 }}>
						<Image
							src="/assets/avatar.png"
							alt="Eugene Kozakov"
							width="192"
							height="192"
							quality={95}
							priority={true}
							className="h-24 w-24 object-cover z-10"
						/>
					</motion.div>

					<motion.span
						className="absolute -bottom-[0.35rem] right-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-xl sm:text-2xl font-medium !leading-[1.5]"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				dangerouslySetInnerHTML={{ __html: intl.title }}
			></motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 font-medium "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1
				}}
			>
				<Link
					href="#contact"
					className="group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
				>
					{intl.buttons.contact}
					<Icon name="arrow-right-long" className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					href="/CV.pdf"
					download
					className="group flex items-center bg-white dark:bg-white/10 px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
				>
					{intl.buttons.download} CV
					<Icon name="download" className="opacity-70 group-hover:translate-x-1 transition" />
				</a>
				<div className="flex gap-4">
					<a
						href="https://www.linkedin.com/in/eugene-kozakov/"
						className="group flex items-center bg-white dark:bg-white/10 p-4 gap-2 rounded-full outline-none text-xl focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
						target="_blank"
					>
						<Icon name="linkedin" category="social" />
					</a>
					<a
						href="https://github.com/Lointainy"
						className="group flex items-center bg-white dark:bg-white/10 p-4 gap-2 rounded-full outline-none text-xl focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
						target="_blank"
					>
						<Icon name="github" category="social" />
					</a>
					<a
						href="https://t.me/eug1_kozakov"
						className="group flex items-center bg-white dark:bg-white/10 p-4 gap-2 rounded-full outline-none text-xl focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
						target="_blank"
					>
						<Icon name="telegram" category="social" />
					</a>
				</div>
			</motion.div>
		</SectionContainer>
	);
}

export default Hero;

