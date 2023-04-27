import Image from 'next/image';
import {
	SiTypescript,
	SiEthereum,
	SiTailwindcss,
	SiNextdotjs,
	SiVercel,
} from 'react-icons/si';
import NFTDrop from '../public/assets/Render NFT Drop.png';

const nftdrop = props => {
	const { projects } = props;

	const technologies = [
		{
			name: 'Next.js',
			icon: <SiNextdotjs className='mr-2' />,
		},
		{
			name: 'TypeScript',
			icon: <SiTypescript className='mr-2' />,
		},
		{
			name: 'ThirdWeb',
			icon: <SiEthereum className='mr-2' />,
		},
		{
			name: 'Tailwind CSS',
			icon: <SiTailwindcss className='mr-2' />,
		},
		{
			name: 'Vercel',
			icon: <SiVercel className='mr-2' />,
		},
	];

	return (
		<div className='w-full min-h-[100vh]'>
			<div className='w-full h-full pt-20 relative flex flex-col items-center'>
				<div className='flex flex-col items-center w-full bg-black/5 rounded-xl py-4 '>
					<Image
						className='opacity-80 transform hover:opacity-100 transition ease-in duration-200'
						src={NFTDrop}
						width={750}
						height={400}
						alt='/'
					/>
					<div className='text-center'>
						<h2 className='uppercase text-2xl text-center tracking-widest text-[#516ce5]'>
							NFT Drop
						</h2>
						<h3 className='dark:text-stone-300'>Next.js | ThirdWeb | Sanity</h3>
					</div>
				</div>
				<div className='max-w-[1240px] mx-5 p-2 grid md:grid-cols-5 gap-8 pt-8'>
					<div className='col-span-4'>
						<h2 className='dark:text-stone-300'>{projects.overview}</h2>
						<p className='py-2 dark:text-stone-300'>{projects.nftdrop1}</p>
						<p className='py-2 dark:text-stone-300'>{projects.nftdrop2}</p>
						<button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300 dark:shadow-md dark:shadow-zinc-700'>
							<a
								href='https://nft-drop-collections.vercel.app/'
								target='_blank'
								rel='noreferrer'
							>
								Demo
							</a>
						</button>
						<button className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-300 dark:shadow-md dark:shadow-zinc-700'>
							<a
								href='https://github.com/Matiaspp96/nft-drop/'
								target='_blank'
								rel='noreferrer'
							>
								Code
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

export default nftdrop;

export async function getStaticProps({ locale }) {
	const response = await import(`../lang/${locale}.json`);

	return {
		props: {
			projects: response.projects,
		},
	};
}
