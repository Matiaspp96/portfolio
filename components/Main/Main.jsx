import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		<div id='home' className='w-full h-screen text-center pt-12'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-400'>
						Let&apos;s build something together
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I&apos;m <span className='text-[#516ce5]'>Matias</span>
					</h1>
					<h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
						I&apos;m a front-end web developer specializing in building and
						designing exceptional digital experiences. Currently, I&apos;m
						focused on building responsive front-end web applications while
						learning Next.js, TypeScript and Solidity.
					</p>
					<div className='flex items-center justify-evenly max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<FaLinkedinIn />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<FaGithub />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<AiOutlineMail />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
