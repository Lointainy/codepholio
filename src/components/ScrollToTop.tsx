'use client';

import React, { useEffect, useState } from 'react';
import { Icon, Button } from '@/components/standarts';

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
				<Button
					btnClassName="primary-alt"
					btnIcon={true}
					type="button"
					name="scroll-to-top"
					onClick={handleScrollToTop}
					aria-label="Scroll to Top"
				>
					<Icon name="arrow-up" />
				</Button>
			)}
		</>
	);
}

export default ScrollToTop;

