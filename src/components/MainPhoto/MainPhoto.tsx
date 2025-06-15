'use client';

import { m } from 'framer-motion';
import Image from 'next/image';

const MainPhoto = () => {
	return (
		<m.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='bg-[#1b1b1b] rounded-full w-[618px] h-[618px] relative z-10 shrink-0 '
		>
			<Image
				src={'/images/man.png'}
				alt={'Main photo'}
				quality={100}
				width={520}
				height={781}
				className='absolute bottom-0 left-1/2 -translate-x-1/2'
			/>
		</m.div>
	);
};

export default MainPhoto;
