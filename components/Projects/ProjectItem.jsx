import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, backgroundImg, url, subtitle, info }) => {
	return (
		<Link href={url} className='cursor-pointer'>
			<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:transition-opacity hover:bg-gradient-radial from-[#516ce5]/100 to-[#709dff]/100 hover:ease-in hover:duration-500'>
				<Image
					className='rounded-xl group-hover:opacity-10 '
					src={backgroundImg}
					alt='Project Pet Elegant'
				/>
				<div className='hidden transform hover:scale-105 duration-500 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
					<h3 className='text-2xl text-white tracking-wider text-center'>
						{title}
					</h3>
					<p className='pb-4 pt-2 text-white text-center'>{subtitle}</p>
					<p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
						{info}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ProjectItem;
