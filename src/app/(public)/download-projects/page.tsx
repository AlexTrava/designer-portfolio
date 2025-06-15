'use client';

import { m } from 'framer-motion';
import Image from 'next/image';

const Page = () => {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='flex items-center flex-col gap-16'
		>
			<div className='grid grid-cols-3 items-center  gap-16'>
				<div>
					<Image
						src={'/images/1.jpg'}
						alt={'Main photo'}
						quality={100}
						width={415}
						height={473}
						className='rounded-lg'
					/>
				</div>
				<Image
					src={'/images/2.jpg'}
					alt={'Main photo'}
					quality={100}
					width={415}
					height={473}
					className='rounded-lg'
				/>
				<Image
					src={'/images/3.jpg'}
					alt={'Main photo'}
					quality={100}
					width={415}
					height={473}
					className='rounded-lg'
				/>
			</div>
			<div>
				<p className='text-xl'>
					Посмотреть и скачать мои другие проекты можно{' '}
					<a
						className='text-primary'
						href='https://drive.google.com/drive/folders/1omLTNY7yAQfz6FUPcxZtzKv_MrOp15ey'
					>
						тут
					</a>
				</p>
			</div>
		</m.div>
	);
};

export default Page;
