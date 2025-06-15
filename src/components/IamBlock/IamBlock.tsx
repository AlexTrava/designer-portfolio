'use client';

import { m } from 'framer-motion';

import SocialLinks from '@/components/SocialLinks/SocialLinks';

const IamBlock = () => {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='shrink-0 pt-24'
		>
			<h3 className='text-gray-500 text-2xl'>Привет, меня зовут</h3>
			<h2 className='text-gray-400 text-4xl'>Павел Травнов</h2>
			<h1 className='text-primary text-6xl font-bold'>UX/UI Дизайнер</h1>
			<SocialLinks />
		</m.div>
	);
};

export default IamBlock;
