'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from './standarts';

function ScrollToTop() {
	const [isVisible, setVisible] = useState(false);

	function handleScrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 600) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{isVisible && (
				<button
					type="button"
					className="flex items-center justify-center p-4 rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 backdrop-blur-[0.5rem] border border-white dark:border-gray-950 border-opacity-40 shadow-2xl hover:scale-105 active:scale-105 transition-all"
					onClick={handleScrollToTop}
					name="scroll-to-top"
				>
					<Icon name="arrow-up" />
				</button>
			)}
		</>
	);
}

export default ScrollToTop;

