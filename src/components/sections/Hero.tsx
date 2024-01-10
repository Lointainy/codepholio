'use client';

import Image from 'next/image';
import React from 'react';

import { motion } from 'framer-motion';

import { Icon, Button } from '@/components/standarts';
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
				<Button btnClassName="primary" btnLink={true} href="#contact">
					{intl.buttons.contact}
					<Icon name="arrow-right-long" className="opacity-70 group-hover:translate-x-1 transition" />
				</Button>
				<Button btnClassName="secondary" btnLink={true} href="/CV.pdf" download>
					{intl.buttons.download} CV
					<Icon name="download" className="opacity-70 group-hover:translate-x-1 transition" />
				</Button>
				<div className="flex gap-4">
					<Button btnClassName="secondary" btnIcon={true} btnLink={true} href="https://www.linkedin.com/in/eugene-kozakov/" target="_blank">
						<Icon name="linkedin" category="social" />
					</Button>
					<Button btnClassName="secondary" btnIcon={true} btnLink={true} href="https://github.com/Lointainy" target="_blank">
						<Icon name="github" category="social" />
					</Button>
					<Button btnClassName="secondary" btnIcon={true} btnLink={true} href="https://t.me/eug1_kozakov" target="_blank">
						<Icon name="telegram" category="social" />
					</Button>
				</div>
			</motion.div>
		</SectionContainer>
	);
}

export default Hero;

