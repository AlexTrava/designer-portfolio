'use client';

import { type PropsWithChildren } from 'react';

import Content from '@/components/layout/Content/Content';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<main>
			<Content>{children}</Content>
		</main>
	);
};

export default Layout;
