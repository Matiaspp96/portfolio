import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const DarkModeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleTheme = mode => {
		setTheme(mode);
	};

	if (!mounted) return null;

	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<div className='ml-10'>
			{currentTheme === 'dark' ? (
				<RiSunFill
					className='text-2xl cursor-pointer text-yellow-500 hover:text-orange-400 hover:scale-110'
					onClick={() => handleTheme('light')}
				/>
			) : (
				<RiMoonFill
					className='text-2xl cursor-pointer text-gray-600 hover:text-gray-400 hover:scale-110'
					onClick={() => handleTheme('dark')}
				/>
			)}
		</div>
	);
};

export default DarkModeButton;
