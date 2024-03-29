'use client';

import React from 'react';

import { Icon, Button } from '@/components/standarts';
import { useTheme } from '@/context/theme-context';

function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button btnClassName="primaryAlt" btnIcon={true} onClick={toggleTheme} type="button" name="switch-theme" aria-label="Switch theme">
			{theme === 'light' ? <Icon name={'sun'} /> : <Icon name={'moon'} />}
		</Button>
	);
}

export default ThemeSwitch;

