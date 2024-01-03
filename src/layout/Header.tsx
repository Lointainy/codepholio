import React from 'react';

type HeaderProps = {
	children: React.ReactNode;
};

async function Header({ children }: HeaderProps) {
	return (
		<header className="z-10 relative w-full h-fit">
			<div className="fixed w-full flex justify-center items-center">{children}</div>
		</header>
	);
}

export default Header;

