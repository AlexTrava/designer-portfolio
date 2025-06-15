'use client';

import { m } from 'framer-motion';

import SocialLinks from '@/components/SocialLinks/SocialLinks';

const Page = () => {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='flex items-center flex-col text-2xl pt-24 gap-4'
		>
			<p>Связаться со мной можно по телефону 8-909-339-18-44.</p>
			<p>A так же в социальных сетях и почте:</p>
			<SocialLinks />
		</m.div>
	);
};

export default Page;
