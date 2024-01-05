'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

import { links } from '@/lib/data';
import { useEffect } from 'react';

type SectionContainerProps = {
	children: React.ReactNode;
	id: (typeof links)[number]['name'];
	fullSize?: boolean;
};

function SectionContainer({ children, id, fullSize }: SectionContainerProps) {
	const { ref, inView } = useInView({
		threshold: 0.2
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(id);
			console.log(inView, id);
		}
	}, [inView, setActiveSection, timeOfLastClick, id]);

	return (
		<section ref={ref} id={id} className={`pt-28  text-center leading-8 ${fullSize ? 'w-full' : 'max-w-[45rem]'}`}>
			{children}
		</section>
	);
}

export default SectionContainer;

