'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { PageSectionsType } from '@/types/data';
import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';

interface AboutProps {
	intl: PageSectionsType['about'];
}

function About({ intl }: AboutProps) {
	return (
		<SectionContainer id="about">
			<SectionHeading>{intl.title}</SectionHeading>
			<motion.div className="flex flex-col" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
				<p className="mb-3" dangerouslySetInnerHTML={{ __html: intl.description }}></p>
			</motion.div>
		</SectionContainer>
	);
}

export default About;

