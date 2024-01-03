'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { skills } from '@/lib/data';

import { PageSectionsType } from '@/types/data';
import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';

const fadeInAnimationVar = {
	initial: {
		opacity: 0,
		y: 100
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index
		}
	})
};

interface SkillsProps {
	intl: PageSectionsType['skills'];
}

function Skills({ intl }: SkillsProps) {
	return (
		<SectionContainer id="skills">
			<SectionHeading>{intl.title}</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skills.map((skill, index) => {
					return (
						<motion.li
							key={index}
							className={'bg-white dark:bg-white/10 dark:text-white/80 border border-black/[0.1] rounded-xl px-3 py-2'}
							variants={fadeInAnimationVar}
							initial="initial"
							whileInView="animate"
							viewport={{
								once: true
							}}
							custom={index}
						>
							{skill}
						</motion.li>
					);
				})}
			</ul>
		</SectionContainer>
	);
}

export default Skills;

