'use client';

import React from 'react';

import { motion } from 'framer-motion';

function SectionDivider() {
	return (
		<motion.div
			className="bg-gray-200 dark:bg-opacity-20 my-20 h-16 w-1 rounded-full sm:block"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.225 }}
		></motion.div>
	);
}

export default SectionDivider;

