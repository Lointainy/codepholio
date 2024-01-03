'use client';

import React, { useEffect, useState } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTheme } from '@/context/theme-context';

import TagItem from '@/components/TagItem';
import { Icon } from '@/components/standarts';
import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';

import { ExperienceItemType, PageSectionsType } from '@/types/data';

interface ExperienceProps {
	intl: PageSectionsType['experience'];
}

function Experience({ intl }: ExperienceProps) {
	const { theme } = useTheme();

	const [experience, setExperience] = useState<ExperienceItemType[]>([]);

	let elementsLength = 3;

	const loadMore = () => {
		setExperience([...experience, ...intl.list.slice(elementsLength, intl.list.length)]);
	};

	useEffect(() => {
		setExperience(intl.list.slice(0, elementsLength));
	}, [intl]);

	return (
		<SectionContainer id="experience" fullSize>
			<SectionHeading>{intl.title}</SectionHeading>
			<VerticalTimeline lineColor="">
				{experience &&
					experience.map((item, elementsIndex) => {
						return (
							<React.Fragment key={elementsIndex}>
								<VerticalTimelineElement
									contentStyle={{
										background: theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
										boxShadow: 'none',
										border: '1px solid rgba(0, 0, 0, 0.05)',
										textAlign: 'left',
										padding: '1.3rem 2rem'
									}}
									contentArrowStyle={{
										borderRight: '0.4rem solid #9ca3af'
									}}
									date={item.date}
									icon={<Icon name={item.icon} category="experience" />}
									iconStyle={{
										background: theme === 'light' ? '#FFFFFF' : 'rgba(17,24,39,1)',
										fontSize: '1.5rem'
									}}
									visible={true}
								>
									<h3 className="font-semibold capitalize">{item.title}</h3>
									<h4 className="font-normal capitalize text-gray-500">
										{item.name ? item.name : '~'}
										<br />
									</h4>
									<span className="!mt-1 font-normal text-sm capitalize text-gray-400">
										{item.location} - {item.locationType} &#9679; {item.employmentType}
									</span>
									<p className="!mt-1 !font-normal text-gray-800">{item.description}</p>
									<ul className="mt-4 flex flex-wrap gap-1 text-sm text-gray-800">
										{item.skills.map((tag, index) => {
											return (
												<React.Fragment key={index}>
													<TagItem tag={tag} />
												</React.Fragment>
											);
										})}
									</ul>
								</VerticalTimelineElement>
							</React.Fragment>
						);
					})}
				{experience && experience.length !== intl.list.length && (
					<VerticalTimelineElement
						iconOnClick={loadMore}
						iconClassName="vertical-timeline-element-icon--button"
						icon={<Icon name={'plus'} />}
						iconStyle={{
							background: theme === 'light' ? '#FFFFFF' : 'rgba(17,24,39,1)',
							fontSize: '1.5rem'
						}}
						visible={true}
					/>
				)}
			</VerticalTimeline>
		</SectionContainer>
	);
}

export default Experience;

