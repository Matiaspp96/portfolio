import Image from 'next/image';
import { IoLogoNodejs } from 'react-icons/io5';
import {
	SiChakraui,
	SiGraphql,
	SiNextdotjs,
	SiReact,
	SiSupabase,
	SiTypescript,
} from 'react-icons/si';
import Taskhub from '../public/assets/Taskhub mockup.png';

const taskhub = props => {
	const { projects } = props;

	const technologies = [
		{
			name: 'Next.js',
			icon: <SiNextdotjs className='mr-2' />,
		},
		{
			name: 'React',
			icon: <SiReact className='mr-2' />,
		},
		{
			name: 'Chakra UI',
			icon: <SiChakraui className='mr-2' />,
		},
		{
			name: 'Typescript',
			icon: <SiTypescript className='mr-2' />,
		},
		{
			name: 'GraphQL',
			icon: <SiGraphql className='mr-2' />,
		},
		{
			name: 'Node.js',
			icon: <IoLogoNodejs className='mr-2' />,
		},
		{
			name: 'Supabase',
			icon: <SiSupabase className='mr-2' />,
		},
	];

	return (
		<div className='w-full'>
			<div className='w-full h-full pt-20 relative flex flex-col items-center'>
				<div className='flex flex-col items-center w-full bg-black/5 rounded-xl py-4 '>
					<Image
						className='opacity-80 transform hover:opacity-100 transition ease-in duration-200'
						src={Taskhub}
						width={750}
						height={400}
						alt='/'
					/>
					<div className='text-center'>
						<h2 className='uppercase text-2xl text-center tracking-widest text-[#516ce5]'>
							Taskhub | Project Management App
						</h2>
						<h3 className='dark:text-stone-300'>Next.js | GraphQL</h3>
					</div>
				</div>
				<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 pb-12'>
					<div className='col-span-4'>
						<h2 className='py-2 dark:text-stone-300'>{projects.overview}</h2>
						<p className='py-2 dark:text-stone-300'>{projects.taskhub1}</p>
						<p className='py-2 dark:text-stone-300'>{projects.taskhub2}</p>
						<p className='py-2 dark:text-stone-300'>{projects.taskhub3}</p>
						<button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300 dark:shadow-md dark:shadow-zinc-700'>
							<a href='https://taskhub.online' target='_blank' rel='noreferrer'>
								Demo
							</a>
						</button>
					</div>
					<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-md dark:shadow-zinc-700'>
						<div className='p-2'>
							<p className='text-center font-bold pb-2 dark:text-stone-300'>
								{projects.technologies}
							</p>
							<div className='grid grid-cols-3 md:grid-cols-1'>
								{technologies.map((tech, index) => (
									<div key={index}>
										<p className='text-gray-600 py-2 flex items-center dark:text-stone-300'>
											{tech.icon}
											{tech.name}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default taskhub;

export async function getStaticProps({ locale }) {
	const response = await import(`../lang/${locale}.json`);

	return {
		props: {
			projects: response.projects,
		},
	};
}
