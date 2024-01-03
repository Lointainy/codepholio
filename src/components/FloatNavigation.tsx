import React from 'react';

function FloatNavigation({ children }: { children: React.ReactNode }) {
	return <div className="fixed bottom-5 right-5 flex flex-col gap-2 items-end">{children}</div>;
}

export default FloatNavigation;

