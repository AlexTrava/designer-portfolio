import Link from 'next/link';

const NotFound = () => {
	return (
		<div className='mx-auto w-1/2 mt-24 text-center'>
			<h1 className='font-bold text-9xl mb-5'>404</h1>
			<div className='text-xl'>Страница не найдена :(</div>
			<div className='pt-2 text-xl'>
				Вернуться на {''}
				<Link
					href={'/'}
					className='text-primary'
				>
					главную
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
