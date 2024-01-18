'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

import { links } from '@/lib/data';
import { useEffect } from 'react';

type SectionContainerProps = {
	children: React.ReactNode;
	id: (typeof links)[number]['name'];
	fullSize?: boolean;
	lastSection?: boolean;
};

function SectionContainer({ children, id, fullSize, lastSection }: SectionContainerProps) {
	const { ref, inView } = useInView({
		threshold: 0.35
	});
	const { setActiveSection, timeOfLastClick, isHomePage } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			isHomePage && setActiveSection(id);
			console.log(inView, id);
		}
	}, [inView, setActiveSection, timeOfLastClick, id]);

	return (
		<section
			ref={ref}
			id={id}
			className={`${lastSection ? 'pb-0' : 'pb-28'} text-center leading-8 ${fullSize ? 'w-full' : 'max-w-[45rem]'}`}
		>
			{children}
		</section>
	);
}

export default SectionContainer;

