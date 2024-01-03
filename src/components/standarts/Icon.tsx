import React, { CSSProperties, PropsWithChildren } from 'react';

import { pathToBasicIcons, pathToExperienceIcons, pathToSocialIcons } from '@/utils/path';

interface IconProps extends PropsWithChildren {
	height?: string;
	viewBox?: string;
	color?: string;
	category?: 'basic' | 'social' | 'experience';
	name: string;
	className?: string;
	style?: CSSProperties | undefined;
}

function Icon(props: IconProps) {
	const {
		category = 'basic',
		height = '1em',
		viewBox = '0 0 16 16',
		color = 'currentColor',
		name: iconName,
		className = '',
		style
	} = props;

	const getPath = (category: 'basic' | 'social' | 'experience') => {
		switch (category) {
			case 'basic':
				return pathToBasicIcons;
			case 'social':
				return pathToSocialIcons;
			case 'experience':
				return pathToExperienceIcons;
			default:
				return '';
		}
	};

	return (
		<>
			{iconName && (
				<div className={`icon-${category} ${className} h-full`} style={style}>
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={height} fill={color} viewBox={viewBox}>
						<use xlinkHref={`${getPath(category)}#${iconName}`}></use>
					</svg>
				</div>
			)}
		</>
	);
}

export default Icon;

