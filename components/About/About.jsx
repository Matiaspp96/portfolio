import Image from 'next/image';
import { useEffect } from 'react';
import Me from '../../public/assets/Matias.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = props => {
	const { about } = props;

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<div
			data-aos='fade-up'
			id='about'
			className='w-full h-full lg:h-screen p-2 flex items-center pt-12'
		>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 lg:px-0'>
				<div className='col-span-2 mb-10 md:mb-0'>
					<p className='uppercase text-xl text-center tracking-widest text-[#516ce5] 2xl:text-2xl'>
						{about.title}
					</p>
					<h2 className='text-center py-4 dark:text-stone-200'>
						{about.subtitle}
					</h2>
					<p className='p-2 text-gray-600 2xl:text-xl dark:text-stone-300'>
						{about.paragraph1}
					</p>
					<p className='p-2 text-gray-600 2xl:text-xl dark:text-stone-300'>
						{about.paragraph2}
					</p>
					<p className='p-2 text-gray-600 hidden md:block 2xl:text-xl dark:text-stone-300'>
						{about.paragraph3}
					</p>
				</div>
				<div className='w-fit h-auto m-auto border-2 border-[#516ce5] shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center relative p-1 hover:border-sky-300 hover:scale-105 ease-in duration-300'>
					<div className='absolute -z-10 bottom-24 w-72 h-96 lg:w-72 lg:h-full lg:bottom-0 md:right-0 2xl:bottom-28 rounded-full mix-blend-multiply filter blur-2xl opacity-50  animate-blob2 animation-delay-2000 bg-cyan-500' />
					<div className='absolute -z-10 bottom-24 w-72 h-96 lg:w-72 lg:h-full lg:bottom-0 md:right-0 2xl:bottom-24 rounded-full mix-blend-multiply filter blur-2xl opacity-50  animate-blob2 animation-delay-4000 bg-pink-500' />
					{/* Image className='rounded-xl animate-[flipX_2s_ease-out_infinite]' */}
					<Image
						className='rounded-xl'
						src={Me}
						alt='Matias Picture'
						width={280}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
