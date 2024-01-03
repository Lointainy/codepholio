import React from 'react';

import SectionContainer from '@/components/sections/SectionContainer';

function PostsPage() {
	return (
		<main className="pt-4 sm:pt-32">
			<div className="flex flex-col px-2 sm:px-4 justify-center items-center">
				<SectionContainer id="blog">
					<div className="h-[22rem]">
						<p className="font-bold">Coming soon</p>
						<a href="/" className="mt-2 underline">
							Back to Home
						</a>
					</div>
				</SectionContainer>
			</div>
		</main>
	);
}

export default PostsPage;

