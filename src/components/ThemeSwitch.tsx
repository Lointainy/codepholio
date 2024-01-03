'use client';

import React from 'react';

import { Icon } from '@/components/standarts';
import { useTheme } from '@/context/theme-context';

function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className="flex items-center justify-center w-fit p-4 rounded-full bg-gray-950 dark:bg-white text-white  dark:text-gray-950 backdrop-blur-[0.5rem] border border-white dark:border-gray-950 border-opacity-40 shadow-2xl hover:scale-105 active:scale-105 transition-all"
			onClick={toggleTheme}
		>
			{theme === 'light' ? <Icon name={'sun'} /> : <Icon name={'moon'} />}
		</button>
	);
}

export default ThemeSwitch;

