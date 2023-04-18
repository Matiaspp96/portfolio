import Image from 'next/image';
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from 'react-icons/io5';
import {
	SiEthereum,
	SiExpress,
	SiIpfs,
	SiSass,
	SiSolidity,
} from 'react-icons/si';
import Bonvo from '../public/assets/Bonvo mockup.png';

const bonvo = props => {
	const { projects } = props;
	return (
		<div className='w-full'>
			<div className='w-full h-full pt-20 relative flex flex-col items-center'>
				<div className='flex flex-col items-center w-full bg-black/5 rounded-xl py-4 '>
					<Image
						className='opacity-80 transform hover:opacity-100 transition ease-in duration-200'
						src={Bonvo}
						width={750}
						height={400}
						alt='/'
					/>
					<div className='text-center'>
						<h2 className='uppercase text-2xl text-center tracking-widest text-[#516ce5]'>
							Marketplace Real Estate Web3
						</h2>
						<h3>React | Web3</h3>
					</div>
				</div>
				<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 pb-12'>
					<div className='col-span-4'>
						<h2 className='py-2'>{projects.overview}</h2>
						<p className='py-2'>{projects.bonvo1}</p>
						<p className='py-2'>{projects.bonvo2}</p>
						<p className='py-2'>{projects.bonvo3}</p>
						<button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>
							<a
								href='https://bonvo-nft.vercel.app/'
								target='_blank'
								rel='noreferrer'
							>
								Demo
							</a>
						</button>
						<button className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-300'>
							<a
								href='https://github.com/Bonvo-dot/frontend'
								target='_blank'
								rel='noreferrer'
							>
								Code
							</a>
						</button>
					</div>
					<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='p-2'>
							<p className='text-center font-bold pb-2'>
								{projects.technologies}
							</p>
							<div className='grid grid-cols-3 md:grid-cols-1'>
								<p className='text-gray-600 py-2 flex items-center'>
									<IoLogoJavascript className='mr-2' /> JavaScript{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<IoLogoReact className='mr-2' /> React{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<IoLogoNodejs className='mr-2' /> Node.js{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiExpress className='mr-2' /> Express{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiSass className='mr-2' /> Sass{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiSolidity className='mr-2' /> Solidity{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiIpfs className='mr-2' /> IPFS{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiEthereum className='mr-2' /> Ether.js{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default bonvo;

export async function getStaticProps({ locale }) {
	const response = await import(`../lang/${locale}.json`);

	return {
		props: {
			projects: response.projects,
		},
	};
}
