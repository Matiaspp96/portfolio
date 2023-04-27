import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='max-w-[1240px] m-auto px-2 py-8 w-full flex flex-row items-center justify-center space-x-5 border-t-2 border-[#516ce5] text-center text-sm font-medium uppercase md:mt-10'>
			<div className='dark:text-stone-300'>
				Made By <span className='text-[#516ce5]'> Matias Palomo </span>
			</div>
			<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3] group dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
				<a
					href='https://www.linkedin.com/in/matias-palomo/'
					target='_blank'
					rel='noreferrer'
				>
					<FaLinkedinIn className='group-hover:scale-110 group-hover:ease-in group-hover:duration-200' />
				</a>
			</div>
			<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3] group dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
				<a
					href='https://github.com/Matiaspp96/'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub className='group-hover:scale-110 group-hover:ease-in group-hover:duration-200' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
