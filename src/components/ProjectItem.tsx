'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import TagItem from './TagItem';
import { Icon } from './standarts';

import { ProjectItemType } from '@/types/data';

function ProjectItem({ title, description, tags, imageUrl, links }: ProjectItemType) {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '0.6 1']
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.section
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess
			}}
			className="group flex flex-col gap-y-4 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white w-full sm:w-[40rem] md:max-w-[42rem] min-h-[17rem] border border-black/5 overflow-hidden rounded-xl transition-all"
		>
			<div className="flex flex-col flex-grow-1 px-4 pt-4">
				<h3 className="text-2xl font-semibold dark:text-white text-left even:text-right">{title}</h3>
				<p className="mt-2 leading-relaxed text-right even:text-left text-gray-700 dark:text-white/70">{description}</p>
			</div>
			<div className="flex flex-wrap sm:flex-nowrap group-even:flex-row-reverse gap-x-4 min-h-[12.5rem] gap-y-[3rem]">
				<div className="flex flex-col sm:basis-3/5 basis-full px-4">
					{tags && (
						<ul className="flex flex-wrap mt-4 gap-2">
							{tags.map((tag, index) => {
								return (
									<React.Fragment key={`${index}-tag-${tag}`}>
										<TagItem tag={tag} />
									</React.Fragment>
								);
							})}
						</ul>
					)}
					<div className="flex flex-wrap mt-4 gap-2">
						{links.map((link, index) => {
							return (
								<a
									className="flex items-center justify-center bg-gray-900/20 dark:bg-white/40 text-white  gap-2 rounded-md outline-none transition px-3 py-[0.25rem] w-fit focus:scale-105 focus:bg-gray-950  hover:scale-105 hover:bg-gray-950 active:scale-105 font-medium text-sm cursor-pointer"
									href={link.url}
									key={index}
								>
									{link.icon && <Icon name={link.icon} category="social" className="flex items-center justify-center" />}
									{link.title && link.title}
								</a>
							);
						})}
					</div>
				</div>
				<div className="relative sm:basis-2/5 basis-full min-h-[12.5rem]">
					<Image
						src={imageUrl}
						alt={title}
						width={300}
						height={200}
						quality={95}
						priority
						className="absolute bottom-0 right-0 shadow-2xl rounded-t-lg group-hover:scale-[1.1] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:rotate-2
					"
					/>
				</div>
			</div>
		</motion.section>
	);
}

<li>
	<div>
		<h1></h1>
	</div>
	<div>
		<div></div>
		<div></div>
	</div>
</li>;

export default ProjectItem;

