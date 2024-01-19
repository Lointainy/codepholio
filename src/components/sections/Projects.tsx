'use client';

import React, { useEffect, useState } from 'react';

import ProjectItem from '@/components/ProjectItem';
import { Icon, Button } from '@/components/standarts';
import { PageSectionsType, ProjectItemType } from '@/types/data';
import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';

interface ProjectsProps {
	intl: PageSectionsType['projects'];
}

function Projects({ intl }: ProjectsProps) {
	const [projects, setProjects] = useState<ProjectItemType[]>([]);

	let projectsLength = 2;

	const loadMore = () => {
		setProjects([...projects, ...intl.list.slice(projectsLength, intl.list.length)]);
	};

	useEffect(() => {
		setProjects(intl.list.slice(0, projectsLength));
	}, [intl]);
	return (
		<SectionContainer id="projects">
			<SectionHeading>{intl.title}</SectionHeading>
			<div className="flex flex-col gap-y-8">
				{projects.map((project, index) => {
					return (
						<React.Fragment key={index}>
							<ProjectItem {...project} />
						</React.Fragment>
					);
				})}
				<div className="flex justify-center items-center">
					{projects && projects.length !== intl.list.length && (
						<Button onClick={loadMore} btnClassName="primaryAlt">
							{intl.buttons.loadMore}
							<Icon name="plus" />
						</Button>
					)}
				</div>
			</div>
		</SectionContainer>
	);
}

export default Projects;

