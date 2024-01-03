'use client';
import React from 'react';

type TagItemProps = {
	tag: string;
};

function TagItem({ tag }: TagItemProps) {
	return (
		<li
			className={
				'bg-white dark:bg-white/10 dark:text-white/80 border border-black/[0.1] rounded-md px-3 py-[0.25rem] font-medium text-sm text-gray-800'
			}
		>
			{tag}
		</li>
	);
}

export default TagItem;

