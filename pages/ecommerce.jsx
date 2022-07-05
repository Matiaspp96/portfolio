import Image from 'next/image';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import {
	SiChakraui,
	SiExpress,
	SiFramer,
	SiGoogle,
	SiMongodb,
	SiNextdotjs,
	SiPassport,
	SiRedux,
} from 'react-icons/si';
import PetElegant from '../public/assets/Render Pet Elegant.png';

const ecommerce = () => {
	return (
		<div className='w-full'>
			<div className='w-full h-full pt-20 relative flex flex-col items-center'>
				<div className='flex flex-col items-center w-full bg-black/5 rounded-xl py-4 '>
					<Image
						className='opacity-80 transform hover:opacity-100 transition ease-in duration-200'
						src={PetElegant}
						width={750}
						height={400}
						alt='/'
					/>
					<div className='text-center'>
						<h2 className='uppercase text-2xl text-center tracking-widest text-[#516ce5]'>
							Pet Elegant
						</h2>
						<h3>Next.js | Express | MongoDb</h3>
					</div>
				</div>
				<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
					<div className='col-span-4'>
						<h2>Overview</h2>
						<p className='py-2'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Perspiciatis ipsam enim odio nostrum provident beatae eveniet
							ipsum sequi, quibusdam facilis minima illo illum voluptas corrupti
							harum fugiat placeat sapiente unde, voluptate alias ullam vitae
							aut! Beatae nam omnis esse animi saepe molestiae quisquam atque
							ducimus repellendus, delectus fugiat dolore voluptatum maxime rem
							laborum inventore odit modi molestias corporis. Aliquid dolorum
							exercitationem amet temporibus magni excepturi. Qui ad repudiandae
							ab aliquid expedita, voluptas temporibus animi adipisci sapiente
							commodi velit aperiam nostrum debitis consequatur unde?
							Accusantium, molestias repellendus, quaerat modi et, ad ut quo
							explicabo iusto nihil enim vitae unde nemo dolore?
						</p>
						<button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>
							<a
								href='https://petelegant.vercel.app/'
								target='_blank'
								rel='noreferrer'
							>
								Demo
							</a>
						</button>
						<button className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-300'>
							<a
								href='https://github.com/Matiaspp96/PF-04-Ecommerce/'
								target='_blank'
								rel='noreferrer'
							>
								Code
							</a>
						</button>
					</div>
					<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='p-2'>
							<p className='text-center font-bold pb-2'>Technologies</p>
							<div className='grid grid-cols-3 md:grid-cols-1'>
								<p className='text-gray-600 py-2 flex items-center'>
									<IoLogoJavascript className='mr-2' /> JavaScript{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiNextdotjs className='mr-2' /> Next.js{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiRedux className='mr-2' /> Redux{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiChakraui className='mr-2' /> ChakraUI{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<IoLogoNodejs className='mr-2' /> Node.js{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiExpress className='mr-2' /> Express{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiMongodb className='mr-2' /> MongoDB{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiGoogle className='mr-2' />
									Google API{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiPassport className='mr-2' />
									Passport{' '}
								</p>
								<p className='text-gray-600 py-2 flex items-center'>
									<SiFramer className='mr-2' />
									Framer Motion
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ecommerce;
