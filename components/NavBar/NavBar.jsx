import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineMail,
	AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Logo from '../../public/assets/Logo-removebg-preview.png';
import { useRouter } from 'next/router';
import DarkModeButton from '../DarkModeButton/DarkModeButton';
import { useTheme } from 'next-themes';

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const [scroll, setScroll] = useState(0);
	const [navHidden, setNavHidden] = useState(false);
	const [language, setLanguage] = useState('es');
	const router = useRouter();
	const { theme } = useTheme();

	const handleNav = () => {
		setNav(!nav);
	};

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > scroll) {
				setNavHidden(true);
			} else {
				setNavHidden(false);
			}
			setScroll(window.scrollY);
		}
	};

	const changeLanguage = e => {
		router.push(router.pathname, router.pathname, {
			locale: e.target.value,
		});
		setLanguage(e.target.value);
	};

	const navBar = useRef();

	useEffect(() => {
		const button = document.getElementById('shiny');

		const { x, y } = navBar.current.getBoundingClientRect();

		function moveMouse(e) {
			button.style.top = `${e.clientY - y - 130}px`;
			button.style.left = `${e.clientX - x - 130}px`;

			if (e.clientY >= 79 || window.event.clientY >= 79) {
				button.style.opacity = '0';
				button.style.transition = 'opacity 0.2s';
			}

			if (e.clientY < 79) {
				button.style.opacity = '0.8';
				button.style.transition = 'opacity 0.2s';
			}
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);
			navBar.current.addEventListener('mousemove', moveMouse);

			return () => {
				window.removeEventListener('scroll', controlNavbar);
				navBar.current.removeEventListener('mousemove', moveMouse);
			};
		}
	}, [scroll]);
	// hover:bg-gradient-to-bl from-[#f5f6ff] via-[#c5e9f7] to-[#889cf1]

	const navLinks = [
		{
			name: 'Home',
			path: '/',
			key: 'home',
		},
		{
			name: 'About',
			path: '/#about',
			key: 'about',
		},
		{
			name: 'Projects',
			path: '/#projects',
			key: 'projects',
		},
		{
			name: 'Skills',
			path: '/#skills',
			key: 'skills',
		},
		{
			name: 'Contact',
			path: '/#contact',
			key: 'contact',
		},
	];

	return (
		<div
			as='navbar'
			ref={navBar}
			className={
				navHidden
					? 'fixed w-full shadow-xl h-20 z-[100] transform -translate-y-[80px] transition ease-in duration-400 bg-[#ecf0f3] md:overflow-hidden dark:bg-zinc-900 tansition-all duration-700'
					: `fixed w-full h-20 shadow-xl z-[100] transform translate-y-0 transition ease-in duration-200 bg-[#ecf0f3] md:overflow-hidden dark:bg-zinc-900 tansition-all duration-700'`
			}
		>
			<button
				id='shiny'
				style={{
					position: 'absolute',
					top: -500,
					left: -500,
					width: '260px',
					height: '260px',
					opacity: 0.6,
					background:
						theme === 'light'
							? 'radial-gradient(#889cf1, #ecf0f3 80%)'
							: 'radial-gradient(#4494e7, #052230 80%)',
					borderRadius: '50%',
					boxShadow: 'none',
					zIndex: -1,
					filter: 'blur(30px)',
				}}
				className='hidden md:block'
			/>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<div className='flex items-center hover:scale-105 hover:ease-in hover:duration-200'>
					<Link href='/'>
						<Image
							className='cursor-pointer'
							src={Logo}
							alt='Logo'
							width='105'
							height='70'
						/>
					</Link>
				</div>
				<div>
					<ul className='hidden md:flex items-center'>
						{navLinks.map(link => (
							<Link href={link.path} key={link.key}>
								<li className='ml-10 text-sm uppercase hover:border-b hover:text-[#516ce5] hover:scale-105 ease-in duration-150 dark:text-gray-100 dark:hover:text-[#8eaae5]'>
									{link.name}
								</li>
							</Link>
						))}
						<DarkModeButton />
						<select
							onChange={changeLanguage}
							className='ml-10 bg-transparent bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none dark:bg-gray-100'
							name='language'
							id=''
							value={language}
						>
							<option defaultValue='default' disabled>
								Language
							</option>
							<option value='es'>ES</option>
							<option value='en'>EN</option>
						</select>
					</ul>
					<div onClick={handleNav} className='md:hidden cursor-pointer'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* NavBar Small Screen */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700 z-10 dark:bg-zinc-900'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-700'
					}
				>
					<div
						onClick={handleNav}
						className={
							nav
								? 'md:hidden fixed right-0 top-0 w-[25%] sm:w-[40%] md:w-[55%] h-screen z-0'
								: ''
						}
					/>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link href='/'>
								<Image
									className='cursor-pointer'
									src={Logo}
									alt='Logo'
									width='105'
									height='70'
								/>
							</Link>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:bg-gray-200'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4 dark:text-stone-300'>
								Let&apos;s build something
							</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							{navLinks.map(link => (
								<Link href={link.path} key={link.key}>
									<li
										onClick={() => setNav(false)}
										className='py-4 text-sm dark:text-stone-300'
									>
										{link.name}
									</li>
								</Link>
							))}
							<select
								onChange={changeLanguage}
								className='mt-2 bg-transparent bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none dark:bg-gray-200'
								name='language'
								id=''
							>
								<option selected value='en'>
									Language
								</option>
								<option value='es'>ES</option>
								<option value='en'>EN</option>
							</select>
						</ul>
						<div className='pt-32'>
							<p className='uppercase tracking-widest text-[#516ce5]'>
								Let&apos;s connect
							</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
									<a
										href='https://www.linkedin.com/in/matias-palomo/'
										target='_blank'
										rel='noreferrer'
									>
										<FaLinkedinIn />
									</a>
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
									<a
										href='https://github.com/Matiaspp96/'
										target='_blank'
										rel='noreferrer'
									>
										<FaGithub />
									</a>
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
									<a
										href='mailto:matiaas.p@gmail.com'
										target='_blank'
										rel='noreferrer'
									>
										<AiOutlineMail />
									</a>
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-stone-300 dark:hover:bg-[#516ce5] dark:shadow-gray-600'>
									<a
										href='https://wa.link/sqc4wz'
										target='_blank'
										rel='noreferrer'
									>
										<AiOutlineWhatsApp />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
