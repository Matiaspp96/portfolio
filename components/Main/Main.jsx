import { useEffect } from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import Rocket from '../Rocket/Rocket';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Main = props => {
	const { main } = props;

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<div
			id='home'
			className='w-full h-full pt-32 lg:h-screen text-center lg:pt-12'
		>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center 2xl:max-w-[1440px] '>
				<div data-aos='fade-up' className='relative z-10 2xl:text-2xl'>
					<div className='absolute -z-10 top-0 left-1/4  w-40 h-40 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob bg-purple-500' />
					<div className='absolute -z-10 top-0 right-1/4  w-40 h-40 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-50  animate-blob animation-delay-2000 bg-cyan-500' />
					<div className='absolute -z-10 top-20 left-1/3  w-40 h-40 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-50  animate-blob animation-delay-4000 bg-pink-500' />

					<p className='uppercase text-sm tracking-widest text-gray-400 2xl:text-2xl dark:text-gray-300'>
						{main.title}
					</p>
					<h1 className='py-4 text-gray-700 dark:text-stone-200'>
						{main.salute}
						<span className='font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-pink-400 via-[#7d51e5]  to-[#516ce5] '>
							Matias
						</span>
					</h1>
					<h1 className='py-4 text-gray-700 dark:text-stone-200'>
						{main.subtitle}
					</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto dark:text-stone-200'>
						{main.description}
					</p>
					<div className='flex items-center justify-evenly max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3] dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
							<a
								href='https://www.linkedin.com/in/matias-palomo/'
								target='_blank'
								rel='noreferrer'
							>
								<FaLinkedinIn />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3] dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
							<a
								href='https://github.com/Matiaspp96/'
								target='_blank'
								rel='noreferrer'
							>
								<FaGithub />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3] dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
							<a
								href='mailto:matiaas.p@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<AiOutlineMail />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3] dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
							<a href='https://wa.link/sqc4wz' target='_blank' rel='noreferrer'>
								<AiOutlineWhatsApp />
							</a>
						</div>
					</div>
				</div>
				{/* <div className='hidden md:flex items-center w-1/3 h-full'>
					<Rocket />
				</div> */}
			</div>
		</div>
	);
};

export default Main;
