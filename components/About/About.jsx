import Image from 'next/image';
import Me from '../../public/assets/Matias.jpg';

const About = () => {
	return (
		<div id='about' className='w-full md:h-screen p-2 flex items-center pt-12'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl text-center tracking-widest text-[#516ce5]'>
						About
					</p>
					<h2 className='text-center py-4'>Who I Am</h2>
					<p className='p-2 text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
						suscipit.
					</p>
					<p className='p-2 text-gray-600'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio rem
						dolorem cupiditate ad accusamus eos animi autem eius deserunt earum
						nulla quaerat, nemo, neque, numquam iure dolor blanditiis fugit
						doloribus? Vel quidem reprehenderit voluptates quisquam, nam
						provident iste praesentium dicta ab consectetur repudiandae itaque
						doloremque soluta ad quis nemo pariatur quas sint sed repellat error
						dolor tempora. A magnam laboriosam quia officia quibusdam hic
						placeat impedit aspernatur amet nam nisi, odit, dolorum consequuntur
						sed! Atque quidem reiciendis labore, illo repellendus, rerum fuga
						doloribus ullam molestias nemo officia dolorum dolorem, accusamus
						blanditiis magnam repudiandae harum. Totam tempora sunt cupiditate
						ad tenetur neque, aut consectetur temporibus dolorum ratione
						corrupti cum repellendus explicabo quod officia eius! Possimus
						molestias molestiae voluptatem unde eum numquam nemo, minus
						doloribus aut. Omnis, illo esse! Quos iste eius non nostrum atque
						eum nemo molestiae tempora aliquam dicta, accusamus adipisci velit
						eaque vitae dolorem soluta dignissimos iusto iure vel amet voluptas
						explicabo facere similique! Minima exercitationem, cum voluptatem
						quae quia obcaecati eius vel perferendis magnam? At ex est esse
						perferendis laudantium. Eius nemo facere odio quos illum cum magni
						alias sequi distinctio!
					</p>
				</div>
				<div className='w-auto h-auto m-auto border-2 border-[#516ce5] shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:border-sky-300 hover:scale-105 ease-in duration-300'>
					{/* Image className='rounded-xl' */}
					<Image
						className='rounded-xl'
						src={Me}
						alt='Matias Picture'
						width={300}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
